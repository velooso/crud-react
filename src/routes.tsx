import { Route, Routes } from "react-router-dom";
import UserList from "./pages/Users/List";
import UserCreate from "./pages/Users/Create";
import UserEdit from "./pages/Users/Edit";

export default function AppRoutes() {
    return(
    <Routes>
        <Route path="/">
            <Route path="/users" element = {<UserEdit /> }/>
            <Route path="/users/new" element = {<UserCreate />}/>
            <Route path="/users/:id" element = {<UserList />}/>
        </Route>

    </Routes>
    )
}