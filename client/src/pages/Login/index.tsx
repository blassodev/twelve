import {ChangeEvent, FC, useEffect, useState} from "react";
import * as SC from './style'
import TextField from "../../components/TextFieldLogin";
import TextFieldLogin from "../../components/TextFieldLogin";

const Login: FC = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }

    const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <SC.MainContainer>
            <SC.FormContainer>
                <SC.Login>
                    <TextFieldLogin value={user} onChange={handleChange} label="Email" id="inputEmail"/>
                    <TextFieldLogin value={user} onChange={handleChangePass} label="Password" id="inputPassword"/>
                </SC.Login>
            </SC.FormContainer>
        </SC.MainContainer>)
}

export default Login;