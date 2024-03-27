import { ExternalLinksEnum } from "../enums";
import bagIcon from "../../assets/bag-icon.svg";
import productsIcon from "../../assets/products-icon.svg";
import collectiveIcon from "../../assets/collective-icon.svg";

export const data = {
  items: [
    {
      title: "Orders",
      url: "#",
      icon: bagIcon,
    },
    {
      title: "Products",
      url: "#", // to stripe
      icon: productsIcon,
    },
    {
      title: "Collective",
      url: ExternalLinksEnum.COLLECTIVE,
      icon: collectiveIcon,
    },
    // {
    //   title: "Settings",
    //   url: ExternalLinksEnum.REQUESTACCESS,
    // },
  ],
};
