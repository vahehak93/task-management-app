import React from "react";
import {useBootcampContext} from "../state";


function Login (){
    const { dispatch } = useBootcampContext()
    return (
        <div>
            <button>Login</button>
        </div>
    )
}

export default Login