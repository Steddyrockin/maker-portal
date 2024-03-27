import React from "react";
import closeIcon from '../../../../../assets/close.svg';

interface CloseButtonProps {
  onClick: () => void;
  isMini?: boolean;
  className?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  isMini = false,
  className = "close_button",
}) => {
  return (
    <img
      src={closeIcon}
      className={isMini ? "close_button_mini" : className}
      alt="close"
      onClick={onClick}
    />
  );
};

export default CloseButton;
