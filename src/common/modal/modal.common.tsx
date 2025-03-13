/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useDisableScroll } from "@/hooks/useDisableHooks";

export const Modal = ({
  children,
  visible,
  disableScroll = true,
  size = "sm",
  title,
  setVisible,
  onCloseCallback,
  onOpenCallback,
  closeIcon = true,
  style,
}: Com.ModalContainerProps) => {
  useDisableScroll(disableScroll && visible);

  useEffect(() => {
    if (visible) {
      onOpenCallback?.();
    }
  }, [visible]);

  const handleClose = () => {
    onCloseCallback?.();
    setVisible(false);
  };

  return document
    ? createPortal(
        <AnimatePresence>
          {visible && (
            <motion.div
              className="fixed inset-0 bg-[#000]/80 bg-opacity-50 flex items-center justify-center h-full z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`bg-gray-100 rounded-lg shadow-lg text-white h-full ${
                  size === "sm"
                    ? "w-96"
                    : size === "md"
                    ? "w-[40rem]"
                    : size === "lg"
                    ? "w-[50rem]"
                    : "w-[75rem]"
                }`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4 }}
                style={style}
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                  <div />
                  {title && (
                    <h2 className="text-xl font-semibold text-black">
                      {title}
                    </h2>
                  )}
                  {closeIcon && (
                    <button
                      onClick={handleClose}
                      className="text-gray-300 hover:text-gray-300 transition cursor-pointer"
                    >
                      <X size={24} color="red" />
                    </button>
                  )}
                </div>
                <div className="p-6 text-center">
                  <div>{children}</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;
};
