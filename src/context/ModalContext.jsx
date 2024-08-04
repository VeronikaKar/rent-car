import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
