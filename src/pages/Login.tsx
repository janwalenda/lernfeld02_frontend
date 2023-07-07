import { IoLogIn } from "react-icons/io5";
import Button from "../components/Button";
import Devider from "../components/Devider";
import { Input } from "../components/Input";
import Auth from "../layouts/Auth";
import { ButtonType } from "../types/ButtonType";
import { DeviderDirection } from "../types/DeviderDirection";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthContextInterface } from "../interfaces/AuthContextInterface";
import type { SubmitHandler } from "../types/SubmitHandler";
import type { ClickHandler } from "../types/ClickHandler";

export default function Login(){
    const auth = useContext(AuthContext) as AuthContextInterface;

    const handleSubmit: SubmitHandler = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        auth.login(formData);
    };

    const handleClick: ClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        auth.toggleLoginMode();
    }

    return (
        <Auth formProps={{
            onSubmit: handleSubmit,
        }}>
            <h1>Login</h1>
            <Devider 
                direction={DeviderDirection.HORIZONTAL} 
                size="full"
                style={{
                    margin: '.5rem 0 .5rem 0',
                    border: '0'
                }} 
            />
            <div>
                <Input label="E-Mail" inputProps={{
                    type: "email",
                    required: true,
                    name: "email",
                }} />
                <Devider 
                    direction={DeviderDirection.HORIZONTAL} 
                    size="full"
                    style={{
                        margin: '.5rem 0 .5rem 0',
                        border: '0',
                    }} 
                />
                <Input label="Password" inputProps={{
                    type: "password",
                    required: true,
                    name: "password",
                }} />
            </div>
            <Devider 
                direction={DeviderDirection.HORIZONTAL} 
                size="full"
                style={{
                    margin: '.5rem 0 .5rem 0',
                    border: '0'
                }} 
            />
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Button 
                    type={ButtonType.PRIMARY} 
                    text="Login" 
                    buttonProps={{
                        type: 'submit',
                        style: {
                            flexGrow: 1,
                        }
                    }}
                    rightIcon={<IoLogIn/>}
                />
                <Devider
                    direction={DeviderDirection.VERTICAL}
                    size="full"
                    style={{
                        margin: '0 .2rem 0 .2rem',
                        border: '0'
                    }}
                />
                <Button 
                    type={ButtonType.SECONDARY} 
                    text="Register" 
                    buttonProps={{
                        onClick: handleClick,
                    }}
                />
            </div>
        </Auth>
    );
}