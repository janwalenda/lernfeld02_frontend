import { ModalType } from "../types/ModalType";

export interface ModalContextInterface {
  //addModal: (id: number) => void;
  isModalOpen: (id: ModalType) => boolean | null;
  toggleModal: (id: ModalType) => void;
  closeAllModals: () => void;
}
