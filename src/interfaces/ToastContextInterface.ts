import { Toast } from './Toast';

export interface ToastContextInterface {
    toasts: Toast[];
    saveToast: (toast: Toast) => void;
    deleteToast: (id: number) => void;
}
