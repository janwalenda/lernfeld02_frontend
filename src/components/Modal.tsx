import { useContext, useEffect, useState } from "react";
import styles from "../styles/Modal.module.scss";
import shadow from '../styles/Shadow.module.scss';
import { ButtonType } from "../types/ButtonType";
import Button from "./Button";
import { IoClose } from "react-icons/io5";
import cx from 'classnames';
import { ModalContext } from "../contexts/ModalContext";
import { ModalContextInterface } from "../interfaces/ModalContextInterface";
import { ModalType } from "../types/ModalType";


export default function Modal({
  modalID,
  children,
  title
}: {
  modalID: ModalType;
  title: string;
  children: React.ReactNode;
}) {
  const modals = useContext(ModalContext) as ModalContextInterface;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const modalOpen = modals.isModalOpen(modalID);
    if (typeof modalOpen === 'boolean') {
      setOpen(modalOpen);
    } else {
      setOpen(false);
    }
  }, [modalID, modals])

  const handleCloseButtonClick = () => {
    modals.toggleModal(modalID);
  };

  const cartStyle = cx({
    [styles.modalOpen]: open,
    [shadow.box]: open,
    [styles.modalClosed]: !open
  });

  return (
    <aside className={cartStyle} key={modalID}>
      <div className={styles.modalTitle} key={styles.modalTitle}>
        <h1>{title}</h1>
        <Button
          type={ButtonType.SECONDARY}
          leftIcon={<IoClose />}
          buttonProps={{
            onClick: handleCloseButtonClick,
          }}
        />
      </div>
      {children}
    </aside>
  );
}
