import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
    return(
        <div className="Sidebarheading">
            <h3 className="sidebarlist">Sidebar list</h3>
            <NavLink to ="/home" className="sidebar-link">Home</NavLink>
            <NavLink to ="/profile" className="sidebar-link">profile</NavLink>
            <NavLink to ="/contact" className="sidebar-link">Contact</NavLink>
            <NavLink to ="/about" className="sidebar-link">About</NavLink>
            <NavLink to="/address" className="sidebar-link">Address</NavLink>
            </div>

    )
}
export default Sidebar;