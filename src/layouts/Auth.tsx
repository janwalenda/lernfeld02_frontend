import { useContext, useEffect } from 'react';
import styles from '../styles/AuthLayout.module.scss'
import { AuthContext } from '../contexts/AuthContext';
import { AuthContextInterface } from '../interfaces/AuthContextInterface';
import { useNavigate } from 'react-router-dom';

type FormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export default function Auth({ 
    children, 
    formProps 
}: { 
    children: React.ReactNode;
    formProps?: FormProps;
}) {
    const auth = useContext(AuthContext) as AuthContextInterface;
    const nav = useNavigate();

    useEffect(()=>{
        const path = auth.getAuthPath();
        nav(path);
    }, [auth, nav]);
    
    return (
        <div className={styles.screen}>
            <form {...formProps} className={styles.formCard}>
                {children}
            </form>
        </div>
    )
}
