import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaStackOverflow, FaYoutube } from "react-icons/fa";
import Logo from "./Logo";
import Sidebar from "./sidebar/Sidebar";


const Header = () => {

    const { pathname } = window.location;


    return <>
        <header id="header">

            <nav className="menu_links">
                <Link className={pathname == '/' ? 'active_link' : ""} to="/">Home</Link>
                <Link className={pathname == '/about' ? 'active_link' : ""} to="/about">About</Link>
                <Link className={pathname == '/experience' ? 'active_link' : ""} to="/experience">Experience</Link>
                <Link className={pathname == '/projects' ? 'active_link' : ""} to="/projects">Projects</Link>
            </nav>

            <div className="logo_container">
                <Logo />
            </div>

            <div className="social_links">
                <Link to="https://www.linkedin.com/in/jagdeep113/"><FaLinkedin color="#0A66C2" className="linkdin icon" /></Link>
                <Link to="https://www.youtube.com/@jagdeepsingh-dev"><FaGithub color="#181717" className="github icon" /></Link>
                <Link to="https://stackoverflow.com/users/7852003/jagdeep-singh"><FaStackOverflow color=" #F48024" className="stack icon" /></Link>
                <Link to="https://github.com/Jagdeep113"><FaYoutube color="#FF0000" className="youtube icon" /></Link>
            </div>

            <Sidebar />

        </header>
    </>
};

export default Header;