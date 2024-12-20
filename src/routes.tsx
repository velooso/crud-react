import { Route, Routes } from "react-router-dom";
import UserList from "./pages/Users/List";
import UserEdit from "./pages/Users/Edit";
import UserCreate from "./pages/Users/Create";
import DashBoard from "./pages/DashBoard";

export default function AppRoutes() {
    return(
    <Routes>
        <Route path="/" element = {<DashBoard/>} />
        <Route path="/users">
            <Route path="/users" element = {<UserList /> }/>
            <Route path="/users/new" element = {<UserCreate />}/>
            <Route path="/users/:id" element = {<UserEdit />}/>
        </Route>
    </Routes>
    )
}