import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthContextInterface } from "../interfaces/AuthContextInterface";

export default function UserCard(){
    const auth = useContext(AuthContext) as AuthContextInterface;
    const userData = auth.getUserData();

    return (
        <div>
            <h1>{userData?.user.id}</h1>
            <p>{userData?.user.email}</p>
        </div>
    );

}