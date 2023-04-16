import { useState } from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom";


function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        isAdmin:role
      }),
    })
      .then((response) => response.json())
      .then((result) =>{
        if (result && result.errors && result.errors[0] && result.errors[0].msg) {
          alert(result.errors[0].msg)
        }
        else{
          if (result && result.errors) {
            alert(result.errors)
          }else{
            navigate('/')
            
          }
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div class="container">
  <input id="register_toggle" type="checkbox"/>
  <div class="slider">
    <form class="form" onSubmit={(e)=>handleSubmit(e)}>
      <span class="title">Sign Up</span>
      <div class="form_control">
      <label class="label">Email</label>
        <input required="" class="input" placeholder='Email' type="text" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
     
      <div class="form_control">
      <label class="label">Password</label>
        <input required="" class="input" type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <div class='inputRadio'>


      <div style={{display:'flex'}}>
          <label>
            <input type="radio" name="radio" onChange={(e)=>setRole(true)}/>
            <span>Admin</span>
          </label>
          <label>
            <input type="radio" name="radio" onChange={(e)=>setRole(false)}/>
            <span>User</span>
          </label>
        
      </div>
      </div>
      <button>Sign Up</button>

      <span class="bottom_text">Already have an account? <label class="swtich" for="register_toggle"><a class="swtich" href="/"> Sign In</a></label> </span>
    </form>

    
    </div>
</div>
  );
}

export default SignUp;
