import logo from '../images/logo.jpg';

function Header() {
    return (
        <header>
            <img src={logo}/>
        <nav>
            <ul>
                <li><a href="Homepage.js">Home</a></li>
                <li><a href="CoursesPage.js">Courses</a></li>
                <li><a href="LoginForm.js">Login</a></li>
            </ul>
        </nav>
  </header>
    )
}

export default Header;