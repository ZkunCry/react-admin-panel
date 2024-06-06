import Portal, { createContainer } from "../Portal/Portal";
import { useCallback, useEffect, useState, useRef } from "react";

const Modal = ({ children, onClose, title, isOpen }) => {
  const [isMounted, setMounted] = useState(false);
  const rootRef = useRef(null);
  useEffect(() => {
    createContainer({ id: "modal" });
    setMounted(true);
  }, []);
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    const handleClick = ({ target }) => {
      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, [onClose]);
  return isMounted && isOpen ? (
    <Portal id={"modal"}>
      <div
        className="z-10 modal__bg h-screen px-[10px] left-0 top-0 fixed flex items-center justify-center w-full bg-popUp "
        ref={rootRef}
      >
        <div className="modal__inner max-h-[90vh]  relative flex flex-col max-w-[500px] w-full bg-light-theme-navbar dark:bg-[#272835] font-semibold text-gray-900 rounded-lg">
          <div className="modal__header flex justify-between border-b border-gray-600 rounded-t p-4 dark:text-white">
            <h1 className="flex items-center text-lg">{title}</h1>
            <button className="text-lg" onClick={onClose}>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};
export default Modal;
