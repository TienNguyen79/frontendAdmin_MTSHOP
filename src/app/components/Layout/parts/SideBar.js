import { Menu } from "antd";
import {
  BookMinus,
  Home,
  LogOut,
  Package,
  Settings,
  Shirt,
  User,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
const items = [
  {
    key: "dashboard",
    label: "Trang Chủ",
    icon: <Home size={"18px"} />,
  },
  {
    type: "divider",
  },
  {
    key: "categories",
    label: "Danh Mục",
    icon: <BookMinus size={"18px"} />,
  },

  {
    key: "product",
    label: "Sản Phẩm",
    icon: <Shirt size={"18px"} />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "7",
            label: "Option 7",
          },
          {
            key: "8",
            label: "Option 8",
          },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "order",
    label: "Đơn Hàng",
    icon: <Package size={"18px"} />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "user",
    label: "Người Dùng",
    icon: <User size={"18px"} />,
  },
  {
    key: "grp",
    label: "Group",
    type: "group",
    children: [
      {
        key: "settings",
        label: "Cài Đặt",
        icon: <Settings size={"18px"} />,
      },
      {
        key: "logout",
        label: "Đăng Xuất",
        icon: <LogOut size={"18px"} />,
      },
    ],
  },
];
const SideBar = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    const { key } = e;

    if (key === "logout") {
      alert("Logout");
    } else {
      navigate(`/${key}`);
    }
  };
  return (
    <div className="w-full">
      <Menu
        onClick={onClick}
        // style={{
        //   width: 256,
        // }}
        className="text-[16px]  "
        defaultSelectedKeys={["dashboard"]}
        defaultOpenKeys={["dashboard"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default SideBar;
