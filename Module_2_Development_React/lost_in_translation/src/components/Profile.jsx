import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';


const Profile = () => {
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);
    const navigate = useNavigate();

    const userCheck = (user) => {
        if (user !== undefined) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        if (userCheck(state.user.username) === false) {
            //redirect to frontpage
            console.log("redirect root");
            navigate('/');
        }
    }, [state])



    return (
        <div id="profile">
            <button onClick={() => navigate('/translator')} id='Translator btn'>To translator</button>
            <button  id=''>logout</button>
        </div>
    )
}

export default Profile;