import { useEffect } from 'react';
import { ToastType } from '../types/ToastType';
import { handleDragStart } from '../helpers/handleDragStart';
import { Toast as ToastInterface } from '../interfaces/Toast';
import styles from '../styles/Toast.module.scss';
import cx from 'classnames';
import { IoClose } from 'react-icons/io5';
import Button from './Button';
import { ButtonType } from '../types/ButtonType';

type ToastProps = {
    toast: ToastInterface;
    deleteToast: (id: number) => void; 
};

export function Toast ({ toast, deleteToast }: ToastProps){
    useEffect(() => {
        if(toast.timeout){
            const timeout = setTimeout(() => {
                toast.id && deleteToast(toast.id);
            }, toast.timeout);
            return () => clearTimeout(timeout);
        }
    }, [toast, deleteToast]);
    
    
    if(!toast.id) {
        return (
            <div>
                Something went wrong (Toast.tsx)
            </div>
        );
    }

    const toastID = toast.id;

    const toastStyle = cx({
        [styles.toastWrapperError]: ToastType.ERROR === toast.type,
        [styles.toastWrapperStandard]: ToastType.STANDARD === toast.type,
        [styles.toastWrapperSuccess]: ToastType.SUCCESS === toast.type,
    })

    const handletoastClose = () => {
        if (toastID) {
            deleteToast(toastID);
        }
    };

    return (
        <div 
            className={toastStyle} 
            onDragStart={handleDragStart}
            draggable={true}>
            <header>
                <h4>{toast.title}</h4>
                <p>{toast.description}</p>
            </header>
            <Button
                type={ButtonType.SECONDARY}
                rightIcon={<IoClose/>}
                buttonProps={{
                    onClick: handletoastClose
                }}
            />
        </div>
    );
}