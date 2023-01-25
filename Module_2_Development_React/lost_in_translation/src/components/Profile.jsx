import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate = useNavigate();

    return (
        <div id="profile">
            <button onClick={() => navigate('/translator')} id='Translator btn'>To translator</button>

        </div>
    )
}

export default Profile;