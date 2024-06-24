import React from "react";
import LayoutDetail from "../../components/Layout/LayoutDetail";
import { SquarePen, Trash } from "lucide-react";
import { Table } from "antd";

const OrderPage = () => {
  const columns = [
    {
      title: "Mã Đơn Hàng",
      dataIndex: "id",
      key: "id",
      render: (id) => <h1>#{id}</h1>,
    },
    {
      title: "Ngày Tạo",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Thông Tin Đặt Hàng",
      dataIndex: "price",
      key: "price",
      // render: () => (
      //   <h1 className="text-text1 font-semibold text-[16px]">

      //   </h1>
      // ),
    },
    {
      title: "Thành Tiền",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      // render: (status) => (
      //   <div>
      //     {" "}

      //   </div>
      // ),
    },

    {
      title: "Hành Động",
      key: "action",
      render: ({ id }) => (
        <div className="flex items-center gap-x-3">
          <div className="cursor-pointer hover:text-primary transition-all">
            <SquarePen size={"20px"} />
          </div>
          <span className="cursor-pointer hover:text-error transition-all">
            <Trash size={"20px"} />
          </span>
        </div>
      ),
    },
  ];
  return (
    <LayoutDetail title="Danh Sách Đơn Hàng">
      <Table
        columns={columns}
        // dataSource={data}
        className="text-text1 font-semibold text-[16px]"
        // pagination={
        //   dataAllProduct.totalPages > 1
        //     ? {
        //         current: currentPage || 1,
        //         total: dataAllProduct.totalResults,
        //         pageSize: pageSize,
        //         onChange: (page, pageSize) => {
        //           setCurrentPage(page);
        //           setPageSize(pageSize);
        //         },
        //       }
        //     : false
        // }
      />
    </LayoutDetail>
  );
};

export default OrderPage;
