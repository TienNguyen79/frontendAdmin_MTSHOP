import React from "react";
import BoxOverviewItem from "../../modules/Dashboard/BoxOverviewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faReceipt,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import ChartColumn from "../../components/Chart/ChartColumn";
import ChartPie from "../../components/Chart/ChartPie";

const DashboardPage = () => {
  return (
    <div className="">
      <div className="relative flex justify-between items-center bg-white p-5  rounded-md">
        <div>
          <h1 className="text-[20px] font-medium text-gray-700">
            Xin Chào Boss Tiến !
          </h1>
          <p className="pt-4 text-gray5">
            Chất lượng dịch vụ là ưu tiên hàng đầu của chúng ta. 😎
          </p>
        </div>
        <div className="w-[300px] h-[200px] absolute right-3 bottom-0 z-[60]">
          <img
            src="/personDashboard.png"
            className="w-full h-full object-cover"
            alt="personDashboard"
          />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-x-4">
        <BoxOverviewItem
          title="Doanh Thu"
          unit="VNĐ"
          icon={<FontAwesomeIcon icon={faSackDollar} size="2xl" />}
          colorIcon="text-[#ffb400]"
          quantity={2000000}
          to="/admin/order"
        ></BoxOverviewItem>
        <BoxOverviewItem
          title="Đơn Hàng"
          icon={<FontAwesomeIcon icon={faReceipt} size="2xl" />}
          colorIcon="text-[#16b1ff]"
          quantity={60}
          to="/admin/order"
        ></BoxOverviewItem>
        <BoxOverviewItem
          title="Khách Hàng"
          quantity={70}
          icon={<FontAwesomeIcon icon={faUser} size="2xl" />}
          colorIcon="text-[#9055fd]"
          to="/admin/customers"
        ></BoxOverviewItem>
        <BoxOverviewItem
          title="Sản Phẩm"
          quantity={90}
          icon={<FontAwesomeIcon icon={faBagShopping} size="2xl" />}
          colorIcon="text-[#20c997]"
          to="/admin/products/product_list"
        ></BoxOverviewItem>
      </div>
      <div className="mt-[80px]  flex items-start gap-x-[250px]">
        <div className=" w-[600px]  h-[300px]">
          <ChartColumn></ChartColumn>
        </div>
        <div className=" w-[400px]  h-[300px]">
          <ChartPie></ChartPie>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
