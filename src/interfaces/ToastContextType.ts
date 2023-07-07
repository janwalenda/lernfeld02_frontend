import { Toast } from './Toast';

export interface ToastContextType {
    toasts: Toast[];
    saveToast: (toast: Toast) => void;
    deleteToast: (id: number) => void;
}
