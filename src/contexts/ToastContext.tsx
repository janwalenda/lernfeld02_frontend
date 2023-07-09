import { createContext, FC, useState } from 'react';
import { ToastContextInterface } from '../interfaces/ToastContextInterface';
import { Toast } from '../interfaces/Toast';
import { useID } from '../hooks/useID';

export const ToastContext = createContext<ToastContextInterface | null>(null);

const ToastProvider: FC<{children: React.ReactNode}> = ({ children }) => {
    const [id, increaseID] = useID();
    const [toastMessages, setToastMessages] = useState<Toast[]>([]);


    /**
     * 
     * @param toast
     * Saves toast to state 
     */
    function saveToast(toast: Toast): void {
        const newToast: Toast = {
            id: id,
            title: toast.title,
            description: toast.description,
            timeout: toast.timeout,
            type: toast.type,
        };
        increaseID();
        setToastMessages([...toastMessages, newToast]);
    }

    /**
     *
     * @param id
     * Deletes Toast 
     */
    function deleteToast(toastID: number): void {
        const toasts = toastMessages.filter((toast: Toast) => {
            return toast.id !== toastID;
        });
        setToastMessages([...toasts]);
    }

    return (
        <ToastContext.Provider value={{
            toasts: toastMessages,
            saveToast,
            deleteToast,
        }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;