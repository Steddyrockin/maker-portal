import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import "./layout.css";
import CloseButton from "../CloseButton";
import portalImage from '../../../../../assets/aura.gif';

interface ModalLayoutProps {
  children: ReactNode;
  onClose: () => void;
  login?: boolean;
  bussinessInfo?: boolean;
}

const ModalLayout: FC<ModalLayoutProps> = ({ children, onClose, login, bussinessInfo }) => {
  return (
    <Box className={ `container ${login? "login-form": ""} ${bussinessInfo?"business-info-form":""}`}>
      <div className="close-button">
        <CloseButton onClick={onClose} />
      </div>
      <Box sx={{textAlign:"center"}}>
        <img
          src={portalImage}
          width="135px"
          height = "135px"
          alt="portal image"
        />
      </Box>
      <main>{children}</main>
    </Box>
  );
};

export default ModalLayout;
