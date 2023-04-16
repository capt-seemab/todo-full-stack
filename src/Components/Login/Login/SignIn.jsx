import './Login.css'
import {Link } from 'react-router-dom'


function SignIn() {

  const submitSignUpData =()=>{
    console.log("data value");
  }
  return (
    <div class="container">
  <input id="register_toggle" type="checkbox"/>
  <div class="slider">
    <form class="form">
      <span class="title">Login</span>
      <div class="form_control">
      <label class="label">Email</label>
        <input required="" placeholder='Email' class="input" type="text"/>
      </div>
      <div class="form_control">
      <label class="label">Password</label>
        <input required="" class="input" type="password"/>
      </div>

      <button>Login</button>

      <span class="bottom_text">Don't have an account? <label class="swtich" for="register_toggle"> <a class="swtich"  href="/signUp">Sign Up</a> </label> </span>
    </form>
    </div>
</div>
  );
}

export default SignIn;
