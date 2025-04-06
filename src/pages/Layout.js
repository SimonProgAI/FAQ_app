import { Outlet, Link, useNavigate } from "react-router-dom";
import Register from "./Register.js";
import Login from "./Login.js";
import Logout from "./Logout.js";

const Layout = ({uname}) => {
    const navigate = useNavigate();
    const welcome= ()=>{
        if(uname){
            return <span>Welcome {uname}!</span>
        }
    }

    const limitLogins = ({uname}) => {
        if (uname){
            navigate('/');
        }
    };

    return(
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>&nbsp;&nbsp;
                    </li>
                    <li>
                        <Link to="/login" element={<Login />} onClick={limitLogins}>Login</Link>&nbsp;&nbsp;
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