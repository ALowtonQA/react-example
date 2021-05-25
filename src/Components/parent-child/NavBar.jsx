import logo from "../../imgs/QA-logo-2019.png";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expland-sm">
            <a className="navbar-brand" target="_blank" rel="noopener noreferrer" href="https://www.qa.com">
                <img src={logo} height="100" width="100"></img>
                <a href="/" class="navbar-brand"> Todo App</a>
            </a>
        </nav>
    );
}

export default NavBar;