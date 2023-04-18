const connecToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const todoList = require("./models/Todo");

// const router = require("./routes/notes");
connecToMongo();

const app = express();
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(cors());
const port = 3001;
app.use(express.json())///////////if we want to use for req.body then we have to use this middleware

app.use("/api/signup", require("./routes/signupRoutes"));
app.use("/api/todo", require("./routes/todoRoutes"));
app.use("/api/login", require("./routes/loginRoutes"));
app.use("/api/logout", require("./routes/logoutRoutes"));

//send mail for the user
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: 'shaikhseemab10@gmail.com',
      pass: 'mrpukjlbdefbhxmf'
  }
});

// define email options
cron.schedule('0 1 * * * *', async () => {
  const getAllTodo=await todoList.find()
 getAllTodo?.map((data)=>{
   if(data.emailEveryDay){
    var mailOptions = {
      from: 'shaikhseemab10@gmail.com',
      to: `${data.email}`,
      subject: 'Daily remainder',
      text: `${data.description}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
   }
 })
});
 

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});