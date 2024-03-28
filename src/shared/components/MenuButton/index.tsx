import { FC } from "react";

interface MenuButtonProps {
  icon?: string;
  clickHandler: (status: boolean) => void;
}

const MenuButton: FC<MenuButtonProps> = ({ icon, clickHandler }) => {
  return (
    <div style={{ paddingTop: 8 }} onClick={() => clickHandler(true)}>
      <img src={icon} alt="menu" />
    </div>
  );
};

export default MenuButton;
