import { createContext, FC, useState } from 'react';
import { ToastContextType } from '../interfaces/ToastContextType';
import { Toast } from '../interfaces/Toast';
import { ToastType } from '../types/ToastType';

export const ToastContext = createContext<ToastContextType | null>(null);

const ToastProvider: FC<{children: React.ReactNode}> = ({ children }) => {
    const [id, setID] = useState(0);
    const [toastMessages, setToastMessages] = useState<Toast[]>([
        {
            id: id + 1,
            title: 'Hello',
            description: 'Schön, das du hier bist',
            timeout: 3000,
            type: ToastType.STANDARD,
        }
    ]);


    /**
     * 
     * @param toast
     * Saves toast to state 
     */
    function saveToast(toast: Toast): void {
        setID(id + 1);
        const newToast: Toast = {
            id: id,
            title: toast.title,
            description: toast.description,
            timeout: toast.timeout,
            type: toast.type,
        };
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