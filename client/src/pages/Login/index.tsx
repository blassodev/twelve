import React, {FC, useState} from "react";
import * as SC from './style'

const Login: FC = () => {
    const [username, setUsername]: any = useState('');
    const [password, setPassword]: any = useState('');
    const handleSubmit = (e: any) =>{
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <button>Login</button>

        </form>
    )
}

export default Login;