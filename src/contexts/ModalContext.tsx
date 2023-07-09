/* eslint-disable @typescript-eslint/no-explicit-any */
import {FC, createContext, useState} from 'react';
import { ModalContextInterface } from '../interfaces/ModalContextInterface';
import { ModalType } from '../types/ModalType';

interface ModalState {
  open: boolean;
  id: number;
}

export const ModalContext = createContext<ModalContextInterface | null>(null);

const ModalProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [modals, setModals] = useState<ModalState[]>([
    {
      id: ModalType.CART_MODAL,
      open: false,
    },
    {
      id: ModalType.PROFILE_MODAL,
      open: false
    },
  ]);

  // function addModal(id: number){
  //   const findModal = modals.find(modal => modal.id === id);

  //   if(findModal) {
  //     return;
  //   }

  //   const modal: ModalState = {
  //     id,
  //     open: false,
  //   };
  //   setModals([...modals, modal]);
  // }

  function isModalOpen(id: ModalType): boolean | null {
    const modal = modals.find(mod => mod.id === id);
    if(modal) {
      return modal.open;
    }
    return null;
  }

  function toggleModal(id: ModalType): void {
    const newModals = modals.map(mod => {
      if(mod.id === id) {
        mod.open = !mod.open;
      } else {
        mod.open = false;
      }

      return mod;
    });
    setModals(newModals);
  }

  function closeAllModals(): void {
    const newModals = modals.map(mod => {
      mod.open = false;
      return mod;
    });
    setModals(newModals);
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        //addModal,
        toggleModal,
        closeAllModals
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
