const connecToMongo = require("./db");
const express = require("express");
const cors = require("cors");

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
app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});