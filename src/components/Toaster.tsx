import { useState, useContext, useEffect } from 'react';
import { ToastContextType } from '../interfaces/ToastContextType';
import { Toast as ToastInterface } from '../interfaces/Toast';
import { ToastContext } from '../contexts/ToastContext';
import { Toast } from '../components/Toast';

export const Toaster = () => {
  const { toasts, deleteToast } = useContext(ToastContext) as ToastContextType;

  const [toastElements, setToastElements] = useState<
    JSX.Element[] | null
  >(null);

  useEffect(() => {
    const createdToasts = toasts.map((toast: ToastInterface) => (
      <Toast key={toast.id} deleteToast={deleteToast} toast={toast} />
    ));
    return setToastElements(createdToasts);
  },[toasts, deleteToast]);

  return (
    <div className="fixed flex-col flex right-4 bottom-4" style={{
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      right: '4rem',
      bottom: '4rem',
      width: '50vw'
    }}>
      {toastElements}
    </div>
  );
};
