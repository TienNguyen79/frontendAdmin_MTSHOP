import React, { useEffect, useState } from "react";
import LayoutDetail from "../../components/Layout/LayoutDetail";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllCategory } from "../../../store/category/handleCategory";
import { Space, Table } from "antd";
import Image from "../../components/Image/Image";
import { FilePenLine, Trash } from "lucide-react";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    dispatch(handleGetAllCategory({ limit: pageSize, page: currentPage }));
  }, [currentPage, dispatch, pageSize]);
  const { dataAllCategory } = useSelector((state) => state.category);
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      width: "12%",
      render: (id) => <h1 className="text-[16px] font-medium">{id}</h1>,
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (_, { image }) => (
        <Image
          url={image}
          className="w-[80px] h-[80px] rounded-lg overflow-hidden"
        ></Image>
      ),
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (name) => <h1 className="text-[16px] font-medium">{name}</h1>,
    },

    {
      title: "Hành Động",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div className="flex gap-x-5">
          <span className="cursor-pointer hover:text-primary transition-all">
            <FilePenLine size={"20px"} />
          </span>
          <span className="cursor-pointer hover:text-error transition-all">
            <Trash size={"20px"} />
          </span>
        </div>
      ),
    },
  ];

  const data =
    dataAllCategory?.results?.length > 0
      ? dataAllCategory?.results?.map((cate) => ({
          key: cate.id,
          ID: cate.id,
          image: cate.url,
          name: cate.name,
          children:
            cate?.children?.length > 0
              ? cate?.children?.map((cateChild) => ({
                  key: cateChild.id,
                  ID: cateChild.id,
                  image: cateChild.url,
                  name: cateChild.name,
                }))
              : [],
        }))
      : [];

  return (
    <div>
      <LayoutDetail titleBtn="Thêm Danh Mục">
        <>
          <Space
            align="center"
            style={{
              marginBottom: 16,
            }}
          ></Space>
          <Table
            columns={columns}
            dataSource={data}
            pagination={
              dataAllCategory.totalPages > 1
                ? {
                    current: currentPage || 1,
                    total: dataAllCategory.totalResults,
                    pageSize: pageSize,
                    onChange: (page, pageSize) => {
                      setCurrentPage(page);
                      setPageSize(pageSize);
                    },
                  }
                : false
            }
          />
        </>
      </LayoutDetail>
    </div>
  );
};

export default CategoriesPage;
