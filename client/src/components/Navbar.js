import logo from '../images/logo.jpg'

const Navbar = () => {


    return ( 
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="login-button">
                <button class="login">Enter App</button>
            </div>
        </div>
    );
}
 
export default Navbar;