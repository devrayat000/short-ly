import { useInsertionEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion as m } from "framer-motion";

import Button from "./Button";

type DrawerBaseProps = {
  onClose?(): void;
};

export type DrawerProps = DrawerBaseProps & {
  open: boolean;
};

const DrawerBase: React.FC<DrawerBaseProps> = ({ onClose }) => {
  return createPortal(
    <div>
      <div
        id="backdrop"
        className="fixed top-0 left-0 w-full h-full bg-transparent z-40"
        onClick={onClose}
      />
      <m.section
        // transition:fly|local={{ x: window.outerWidth, easing: quintInOut, opacity: 0.4 }}
        initial={{ opacity: 0.1, x: window.outerWidth }}
        animate={{ opacity: 1, x: 0, transition: { ease: "easeInOut" } }}
        exit={{ opacity: 0.1, x: window.outerWidth }}
        role="menu"
        className="fixed top-20 left-0 h-56 w-full px-7 z-50"
      >
        <div className="bg-primary-bg rounded-lg px-5 py-8 flex flex-col items-center gap-4">
          <Button pill fullWidth variant="text" className="text-gray-50">
            Features
          </Button>
          <Button pill fullWidth variant="text" className="text-gray-50">
            Pricing
          </Button>
          <Button pill fullWidth variant="text" className="text-gray-50">
            Resources
          </Button>
          <hr className="self-stretch bg-neutral-gray-violet" />
          <Button pill fullWidth variant="text" className="text-gray-50">
            Login
          </Button>
          <Button pill fullWidth>
            Sign Up
          </Button>
        </div>
      </m.section>
    </div>,
    document.body
  );
};

const Drawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  useInsertionEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [open]);

  return (
    <AnimatePresence exitBeforeEnter>
      {open && <DrawerBase onClose={onClose} />}
    </AnimatePresence>
  );
};

export default Drawer;
