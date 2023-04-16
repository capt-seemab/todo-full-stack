import { Routes, Route } from "react-router-dom";
// import Login from "../Components/Login/Login";
import Admin from "../Components/Admin/Admin";
import UserTodoPanel from "../Components/UserTodoPanel/UserTodoPanel";
import SignUp from "../Components/Login/SignUp/SignUp";
import SignIn from "../Components/Login/Login/SignIn";

const Routing = () => {
return (
<Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />


        <Route path="/Admin" element={<Admin />} />
        <Route path="/Todo" element={<UserTodoPanel />} />
      
</Routes>
);
};

export default Routing;