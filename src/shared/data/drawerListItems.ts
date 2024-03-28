import { ExternalLinksEnum } from "../enums";
import bagIcon from "assets/bag-icon.svg";
import productsIcon from "assets/products-icon.svg";
import collectiveIcon from "assets/collective-icon.svg";
import dollar from "assets/$.svg";

export interface DataItem {
  title: string;
  url: string;
  icon: string;
}

export interface Data {
  items: DataItem[];
}

export const data: Data = {
  items: [
    {
      title: "Orders",
      url: "#",
      icon: bagIcon,
    },
    {
      title: "Business Details",
      url: "#",
      icon: dollar,
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
  ],
};
