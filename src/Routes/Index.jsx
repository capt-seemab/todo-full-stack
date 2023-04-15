import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import Admin from "../Components/Admin/Admin";
import UserTodoPanel from "../Components/UserTodoPanel/UserTodoPanel";

const Routing = () => {
return (
<Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Todo" element={<UserTodoPanel />} />
      
</Routes>
);
};

export default Routing;