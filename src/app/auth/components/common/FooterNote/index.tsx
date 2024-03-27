import { Typography } from "@mui/material";
import { FC } from "react";

interface FooterNoteProps {
  normalText?: string;
  hrefText?: string;
  hrefUrl?: string;
}

const FooterNote: FC<FooterNoteProps> = ({ normalText, hrefText, hrefUrl }) => {
  return (
    <Typography
      style={{
        fontFamily: "Vulf Sans Demo",
        fontSize: 14,
        marginTop: 20,
        color: "white",
      }}
    >
      {normalText}{" "}
      <a href={hrefUrl} style={{ color: "rgba(204, 183, 131, 1)" }}>
        {hrefText}
      </a>
    </Typography>
  );
};

export default FooterNote;
