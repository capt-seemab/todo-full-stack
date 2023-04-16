import { Routes, Route } from "react-router-dom";
// import Login from "../Components/Login/Login";
import Admin from "../Components/Admin/Admin";
import UserTodoPanel from "../Components/UserTodoPanel/UserTodoPanel";
import SignUp from "../Components/Login/SignUp/SignUp";
import SignIn from "../Components/Login/Login/SignIn";

const Routing = () => {
return (
<Routes>
        <Route path="/" element={<SignIn session={false}/>} />
        {/* <Route exact path="/signIn" element={<SignIn session={true}/>} /> */}
        <Route exact path="/signUp" element={<SignUp />} />

        <Route exact path="/Admin" element={<Admin />} />
        <Route exact path="/Todo" element={<UserTodoPanel />} />
      
</Routes>
);
};

export default Routing;