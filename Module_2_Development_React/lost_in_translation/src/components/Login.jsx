const Login = () => {
    return(
        <div id="LoginContainer" className="container col-8 mr rounded-4">
            <div className="input input-group">
                <div className="input-group-prepend col-1">
                    <span className="input-group-img">
                        <img src="https://img.icons8.com/ios/100/null/keyboard.png" alt="" style={{height:40, width:40, margin:5, marginRight:10, marginLeft:10}} />
                    </span>
                </div>
                <input type="text" className="col-11" name="" id="" aria-describedby="helpId" placeholder="" style={{background:"transparent", border:0, borderTopRightRadius:25, borderBottomRightRadius:25}}/>
            </div>
        </div>
    )
}

export default Login;