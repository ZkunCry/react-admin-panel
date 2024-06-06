import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const createContainer = (options) => {
  if (document.getElementById(options.id)) return;
  const { id, mountNode = document.body } = options;
  const portalContainer = document.createElement("div");
  portalContainer.setAttribute("id", id);

  mountNode.appendChild(portalContainer);
};
const Portal = ({ children, id }) => {
  const [container, setContainer] = useState();

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);
      if (!portalContainer) {
        throw new Error(
          "There is no portal container in markup. Please add portal container with proper id attribute."
        );
      }
      setContainer(portalContainer);
    }
  }, [id]);
  return container ? createPortal(children, container) : null;
};
export { createContainer };
export default Portal;
