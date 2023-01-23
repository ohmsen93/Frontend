import Logo from '../Resources/Logo.png';
import LogoBg from '../Resources/Splash.svg';
import Login from './Login';
const Welcome = () => {
    return(
        <div id="Welcome" className="container col-12">
            <div className="imgContainer">
                <img src={LogoBg} alt="" className="logoImg" id="LogoBg" />
                <img src={Logo} alt="" className="logoImg" id="Logo" />
            </div>
            <div id="WelcomeText">
                <h1>Lost in Translation</h1>
                <h3>Get started</h3>
            </div>
            <Login/>
        </div>
    )
}

export default Welcome;