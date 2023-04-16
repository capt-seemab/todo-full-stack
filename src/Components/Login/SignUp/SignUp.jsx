import './Login.css'



function SignUp() {

  const submitSignUpData =()=>{
    console.log("data value");
  }
  return (
    <div class="container">
  <input id="register_toggle" type="checkbox"/>
  <div class="slider">
    <form class="form">
      <span class="title">Sign Up</span>
      <div class="form_control">
      <label class="label">Email</label>
        <input required="" class="input" placeholder='Email' type="text"/>
      </div>
     
      <div class="form_control">
      <label class="label">Password</label>
        <input required="" class="input" type="password"/>
      </div>

      <div class='inputRadio'>


      <div style={{display:'flex'}}>
        {/* <form> */}
          <label>
            <input type="radio" name="radio"/>
            <span>Admin</span>
          </label>
          <label>
            <input type="radio" name="radio"/>
            <span>User</span>
          </label>
        
        {/* </form> */}
      </div>
        {/* <label class="labelRadio"><input required="" class="input" name='checkSignUp' type="radio"/>Admin</label>
        <label class="labelRadio"><input required="" class="input" name='checkSignUp' type="radio"/>User</label> */}
      </div>
      <button onClick={submitSignUpData}>Sign Up</button>

      <span class="bottom_text">Already have an account? <label class="swtich" for="register_toggle"><a class="swtich" href="/"> Sign In</a></label> </span>
    </form>

    
    </div>
</div>
  );
}

export default SignUp;
