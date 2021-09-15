import {FC, useEffect} from "react";
import * as SC from './style'

const Login: FC = () => {
    useEffect(()=>{
        console.log(process.env.CHOKIDAR_USEPOLLING)
    },[])
    return <SC.MainContainer>Login work!</SC.MainContainer>
}

export default Login;