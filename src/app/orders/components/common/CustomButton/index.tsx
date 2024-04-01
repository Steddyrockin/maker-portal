import { Box } from "@mui/material";
import { FC } from "react";

interface CustomButtonProps {
  label: string;
  handleClick: () => void;
  widthPercent?: number;
  contained?: boolean;
  outlined?: boolean;
  green?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  label,
  handleClick,
  widthPercent,
  contained,
  outlined,
  green,
}) => {
  return (
    <Box
      sx={{
        width: widthPercent ? `${widthPercent}%` : "38%",
        textAlign: "center",
        fontFamily: "Recoleta",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "16.8px",
        color: contained ? "rgba(0, 0, 0, 1)" : "rgba(217, 217, 217, 1)",
        padding: "15px 10px",
        borderRadius: "100px",
        backgroundColor: contained
          ? "white"
          : green
          ? "rgba(64, 195, 151, 1)"
          : "",
        border: outlined ? "1px solid rgba(255, 255, 255,0.4)" : "none",
      }}
      onClick={handleClick}
    >
      {label}
    </Box>
  );
};

export default CustomButton;
