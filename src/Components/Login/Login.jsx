import './Login.css'



function Login() {

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
      <label class="label">Username</label>
        <input required="" placeholder='Username' class="input" type="text"/>
      </div>
      <div class="form_control">
      <label class="label">Password</label>
        <input required="" class="input" type="password"/>
      </div>
      <div class='inputRadio'>
        <label class="labelRadio"><input required="" class="input" name='check' type="radio"/>Admin</label>
        <label class="labelRadio"><input required="" class="input" name='check' type="radio"/>User</label>
      </div>
      <button>Login</button>

      <span class="bottom_text">Don't have an account? <label class="swtich" for="register_toggle">Sign Up</label> </span>
    </form>
    <form class="form">
      <span class="title">Sign Up</span>
      <div class="form_control">
      <label class="label">Username</label>
        <input required="" class="input" type="text"/>
      </div>
     
      <div class="form_control">
      <label class="label">Password</label>
        <input required="" class="input" type="password"/>
      </div>

      <div class='inputRadio'>
        <label class="labelRadio"><input required="" class="input" name='checkSignUp' type="radio"/>Admin</label>
        <label class="labelRadio"><input required="" class="input" name='checkSignUp' type="radio"/>User</label>
      </div>
      <button onClick={submitSignUpData}>Sign Up</button>

      <span class="bottom_text">Already have an account? <label class="swtich" for="register_toggle">Sign In</label> </span>
    </form>

    
    </div>
</div>
  );
}

export default Login;
