declare namespace Com {
  interface ModalContainerProps {
    id?: string | number;
    children: React.ReactNode;
    visible: boolean;
    style?: React.CSSProperties;
    disableScroll?: boolean;
    modalContainerStyle?: React.CSSProperties;
    closeModal?: () => void;
    modalSize?: string;
    width?: number | string;
    height?: number | string;
    overlay?: boolean;
    overlayBlur?: number;
    overlayDark?: boolean;
    title?: React.ReactNode;
    size?: "sm" | "md" | "lg" | "responsive" | "xl";
    setVisible: Dispatch<SetStateAction<boolean>>;
    closeIcon?: boolean;
    onCloseCallback?: () => void;
    onOpenCallback?: () => void;
  }
}
