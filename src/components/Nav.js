import react from "react";
import { Link } from "react-router-dom";


const Nav=()=>{
return(
       <div>
        <ul className="nav-ul">
            <li><Link to="/">home</Link></li>  
            {/* <li><Link to="/add">add product</Link></li>   */}
            {/* <li><Link to="/update">update product</Link></li>   */}
            {/* <li><Link to="/logout">log out</Link></li>   */}
            <li><Link to="/profile">profile</Link></li> 
            <li><Link to="/SignUp">Sign Up</Link></li> 
        </ul>
      </div>
   )
}

export default Nav;