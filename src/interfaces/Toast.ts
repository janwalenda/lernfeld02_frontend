import { ToastType } from '../types/ToastType';

export interface Toast {
    id?: number;
    title: string;
    description: string;
    timeout?: number;
    type: ToastType
}