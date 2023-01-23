import * as Icon from 'react-bootstrap-icons';

const Login = () => {
    return(
            <form id="LoginContainer" className="form-inline col-8 offset-2 mr rounded-4">
                <div className="input input-group">
                    <div className="input-group-prepend col-1 p-2">
                        <span className="input-group-img">
                            <img src="https://img.icons8.com/ios/100/null/keyboard.png" alt="" style={{height:30, width:30}} />
                        </span>
                    </div>
                    <input type="text" className="col-10" name="" id="" aria-describedby="helpId" placeholder="What's your name?" style={{background:"transparent", color:'#969696' , border:0, fontSize:25 ,fontFamily:'Sanchez'}}/>
                    <div className="input-group-append col-1 p-1">
                        <button className="btn btn-outline-light text-right" type="submit" style={{height:42, width:42, borderRadius:25, backgroundColor:'#845EC2', border:'None'}}>
                            <Icon.PlayFill color='#FFF' size={32} style={{marginLeft:-5}} />
                        </button>

                    </div>
                </div>
            </form>

            


    )
}

export default Login;