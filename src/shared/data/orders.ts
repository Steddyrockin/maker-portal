import avatar1 from "assets/avatar1.svg";
import avatar2 from "assets/avatar2.svg";
import avatar3 from "assets/avatar3.svg";
import avatar4 from "assets/avatar4.svg";
import avatar5 from "assets/avatar5.svg";

import confirmedIcon from "assets/confirmed-icon.svg";
import onItsWayIcon from "assets/on-its-way-icon.svg";
import outForDeliveryIcon from "assets/out-for-delivery-icon.svg";
import deliveredIcon from "assets/delivered-icon.svg";

import product1 from "assets/product1.svg";
import product2 from "assets/product2.svg";

export interface OrderItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfProcessing: string;
  deliveryDate: string;
  status: number;
  image: string;
}

export interface OrderStatusData {
  label: string;
  image: string;
}

export const ordersData: OrderItem[] = [
  {
    id: "111",
    name: "hannamontana",
    email: "hanna_montana@gmail.com",
    phone: "(323) 481-5496",
    dateOfProcessing: "12/26/2022",
    deliveryDate: "12/26/2022",
    status: 0,
    image: avatar1,
  },
  {
    id: "222",
    name: "hannamontana",
    email: "hanna_montana@gmail.com",
    phone: "(323) 481-5496",
    dateOfProcessing: "12/26/2022",
    deliveryDate: "12/26/2022",
    status: 0,
    image: avatar2,
  },
  {
    id: "",
    name: "hannamontana",
    email: "hanna_montana@gmail.com",
    phone: "(323) 481-5496",
    dateOfProcessing: "12/26/2022",
    deliveryDate: "12/26/2022",
    status: 0,
    image: avatar3,
  },
  {
    id: "444",
    name: "hannamontana",
    email: "hanna_montana@gmail.com",
    phone: "(323) 481-5496",
    dateOfProcessing: "12/26/2022",
    deliveryDate: "12/26/2022",
    status: 0,
    image: avatar4,
  },
  {
    id: "555",
    name: "hannamontana",
    email: "hanna_montana@gmail.com",
    phone: "(323) 481-5496",
    dateOfProcessing: "12/26/2022",
    deliveryDate: "12/26/2022",
    status: 0,
    image: avatar5,
  },
];

export const orderStatusData: OrderStatusData[] = [
  {
    label: "Confirmed",
    image: confirmedIcon,
  },
  {
    label: "On its way",
    image: onItsWayIcon,
  },
  {
    label: "Out for delivery",
    image: outForDeliveryIcon,
  },
  {
    label: "Delivered",
    image: deliveredIcon,
  },
];

export const oderDetailData = {
  phone: "(323) 481-5496",
  email: "hanna_montana@gmail.com",
  paymentMethod: "ending with 9616",
  orderId: "#123456",
  shippingAddress:
    "Stedman Cleveland 4523 Woodman Avenue Apt 105 Sherman Oaks, CA 91423",
  billingAddress:
    "Stedman Cleveland 4523 Woodman Avenue Apt 105 Sherman Oaks, CA 91423",
  shippingMethod: ["FedEx", "(3-7 business days)"],
  status: 0,
};

export const productDetailData = {
  products: [
    {
      brandName: " Brand name",
      itemName: "Item name",
      returnPolicy: "Return Policy 14 days unworn, unused",
      price: 150,
      image: product1,
    },
    {
      brandName: " Brand name",
      itemName: "Item name",
      returnPolicy: "Return Policy 14 days unworn, unused",
      price: 150,
      image: product2,
    },
  ],
  subTotal: 300,
  shippingCost: 10,
  taxesCost: 10,
  total: 320,
};
