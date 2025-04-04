import { Outlet, Link } from "react-router-dom";
import Register from "./Register.js";
import Login from "./Login.js";
import Logout from "./Logout.js";

const Layout = ({uname}) => {
    
    const welcome= ()=>{
        if(uname){
            return <span>Welcome {uname}!</span>
        }
    }

    return(
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>&nbsp;&nbsp;
                    </li>
                    <li>
                        <Link to="/login" element={<Login />}>Login</Link>&nbsp;&nbsp;
                    </li>
                    <li>
                        <Link to="/logout" element={<Logout />}>Logout</Link>&nbsp;&nbsp;
                    </li>
                    <li>
                        <Link to="/register" element={<Register />}>Register</Link>&nbsp;&nbsp;
                    </li>
                    <div id="welcomeMsg">{welcome()}</div>
                </ul>
            </nav>
            <Outlet />
        </>    
    )
}

export default Layout;