import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const user = useSelector((state) => state.User);
    const navigate = useNavigate();


    /*
    console.log(user.user.username);


    const userCheck = (user) => {
        if(user !== undefined){
            return true
        } else {
            return false
        }
    }
*/


    return (
        <header className="p-2 col-12">
            <h1 className="col-5 offset-2">Lost in Translation</h1>
            {/*(userCheck(user.user.username) === true) ? <button onClick={() => navigate('/profile')} id='Profile'>{user.user.username}</button> : ''*/ }
        </header>
    );

}

export default Header;