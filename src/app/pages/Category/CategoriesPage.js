import React, { useEffect, useState } from "react";
import LayoutDetail from "../../components/Layout/LayoutDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteCategory,
  handleGetAllCategory,
} from "../../../store/category/handleCategory";
import { Space, Table } from "antd";
import Image from "../../components/Image/Image";
import { FilePenLine, Trash } from "lucide-react";
import { Epath } from "../../routes/routerConfig";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

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
      render: (id, record) => {
        return (
          <h1
            className={`text-[16px] font-medium ${
              record.isChild && "text-primary-"
            } `}
          >
            {id}
          </h1>
        );
      },
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (_, { image, isChild }) => (
        <Image
          url={image}
          className={`w-[80px] h-[80px] rounded-lg overflow-hidden  ${
            isChild && "ml-10"
          }`}
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
      render: (cate) => {
        console.log("🚀 ~ CategoriesPage ~ cate:", cate);
        // console.log("🚀 ~ CategoriesPage ~ cateChild:", cateChild);

        return (
          <div className="flex gap-x-5">
            <Link
              to={`/categories/update/${cate.id}`}
              className="cursor-pointer hover:text-primary transition-all"
            >
              <FilePenLine size={"20px"} />
            </Link>
            {/* Nếu là thằng cha và không có con và không có sản phẩm thì có thể xóa */}
            {/* Nếu là thằng cha và có con và sản phẩm > 0 thì không xóa */}
            {/* Nếu là thằng con và  không có sản phẩm thì có thể xóa */}

            {!cate?.parentId &&
            cate?.children?.length <= 0 &&
            cate?.productCount === 0 ? (
              <span
                className="cursor-pointer hover:text-error transition-all"
                onClick={() => handleDeteCategoryForm(cate.id)}
              >
                <Trash size={"20px"} />
              </span>
            ) : !cate?.parentId &&
              cate?.children?.length > 0 &&
              cate?.productCount > 0 ? (
              ""
            ) : cate?.parentId && cate.productCount <= 0 ? (
              <span
                className="cursor-pointer hover:text-error transition-all"
                onClick={() => handleDeteCategoryForm(cate.id)}
              >
                <Trash size={"20px"} />
              </span>
            ) : (
              ""
            )}
          </div>
        );
      },
    },
  ];

  const data =
    dataAllCategory?.results?.length > 0
      ? dataAllCategory?.results?.map((cate) => ({
          key: cate.id,
          ID: cate.id,
          image: cate.url,
          name: cate.name,
          action: cate,
          productCount: cate.productCount,
          isChild: false,
          children:
            cate?.children?.length > 0
              ? cate?.children?.map((cateChild) => ({
                  key: cateChild.id,
                  ID: cateChild.id,
                  image: cateChild.url,
                  name: cateChild.name,
                  action: cateChild,
                  productCount: cate.productCount,
                  isChild: true, // Child row
                }))
              : [],
        }))
      : [];

  const handleDeteCategoryForm = (id) => {
    Swal.fire({
      title: `Bạn chắc chắn muốn xóa ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đúng vậy",
      cancelButtonText: "Hủy Bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          handleDeleteCategory({
            id: id,
            callBack: () => {
              toast.success("Xóa Thành Công", { autoClose: 800 });
            },
          })
        );
      }
    });
  };

  return (
    <div>
      <LayoutDetail titleBtn="Thêm Danh Mục" url={Epath.addCategory}>
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
            // rowClassName={(record) => record.isChild && "bg-[#ccc]   "}
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
