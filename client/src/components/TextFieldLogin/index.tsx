import {ChangeEvent, FC} from "react";
import * as SC from './style'

interface TextFieldProps{
    value: string
    onChange: (value:ChangeEvent<HTMLInputElement>) => void
    label: string
    id: string
}

const TextFieldLogin: FC<TextFieldProps> = ({value, onChange, label, id}) => {
    return (
        <SC.Container>
            <SC.CustomLabel htmlFor={id}>{label}</SC.CustomLabel>
            <SC.MainInput value={value} onChange={onChange} id={id}/>
        </SC.Container>
    )
}

export default TextFieldLogin;