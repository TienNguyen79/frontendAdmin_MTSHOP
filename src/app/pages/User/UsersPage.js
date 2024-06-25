import React, { useCallback, useEffect, useState } from "react";
import LayoutDetail from "../../components/Layout/LayoutDetail";
import {
  Ban,
  Banana,
  Circle,
  Search,
  SquarePen,
  Star,
  Trash,
} from "lucide-react";
import { Table, Tag } from "antd";
import Image from "../../components/Image/Image";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUser } from "../../../store/user/handleUser";
import { statusRole, statusUser } from "../../../utils/commom";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { debounce } from "lodash";
import { Epath } from "../../routes/routerConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UsersPage = () => {
  const { control } = useForm();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetUser({ limit: pageSize, page: currentPage, name: name }));
  }, [currentPage, dispatch, name, pageSize]);

  const { dataUser } = useSelector((state) => state.user);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <h1>#{id}</h1>,
    },
    {
      title: "Thông Tin",
      dataIndex: "info",
      key: "info",
      render: (info) => (
        <div className="flex items-center gap-x-2">
          <Image
            url={info.avatar}
            className="w-[80px] h-[80px] rounded-lg overflow-hidden"
          ></Image>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-[18px]">{info.name}</h1>
            <h1 className="text-text3 text-[16px]">{info.email}</h1>
          </div>
        </div>
      ),
    },

    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <div className="flex items-center gap-x-1">
          <span className="text-text1 font-medium"> {role} </span>
        </div>
      ),
    },

    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className="flex items-center gap-x-1">
          <span className="text-text1 font-medium"> {status} </span>
        </div>
      ),
    },

    {
      title: "Hành Động",
      key: "action",
      render: ({ action }) => {
        console.log("🚀 ~ UsersPage ~ record:", action);

        return (
          <div
            className={`flex items-center gap-x-3 
            }`}
          >
            <div
              className="cursor-pointer hover:text-primary transition-all"
              onClick={() => {
                navigate(`/users/update/${action.id}`);
              }}
            >
              <SquarePen size={"20px"} />
            </div>

            {action.status === statusUser.BAN ? (
              <span
                className="cursor-pointer hover:text-green-400 transition-all"
                onClick={handleUnBanUser}
              >
                <Star size={"20px"} />
              </span>
            ) : action.status === statusUser.NORMAL ? (
              <span
                className="cursor-pointer hover:text-error transition-all"
                onClick={handleBanUser}
              >
                <Ban size={"20px"} />
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
    dataUser?.results?.length > 0 &&
    dataUser?.results?.map((item) => ({
      key: item.id,
      id: item.id,
      info: {
        email: item.email,
        name: item.userName,
        avatar:
          item.avatar ||
          "https://drallen.com.vn/wp-content/uploads/2023/09/chup-anh-di-bien.jpg",
      },
      role:
        item.roleID === statusRole.ADMIN ? (
          <Tag color="gold">Quản Trị Viên</Tag>
        ) : item.roleID === statusRole.USER ? (
          <Tag color="cyan">Người Dùng</Tag>
        ) : (
          ""
        ),
      status:
        item.status === statusUser.BAN ? (
          <Tag color="red">Bị Cấm</Tag>
        ) : item.status === statusUser.NORMAL ? (
          <Tag color="blue">Bình thường</Tag>
        ) : (
          ""
        ),
      action: { id: item.id, status: item.status },
    }));

  const debouncedChangeHandler = useCallback(
    debounce((value) => {
      setName(value);
    }, 300), // Đặt thời gian debounce (ms)
    []
  );

  // Hàm xử lý onChange
  const handleChange = (e) => {
    debouncedChangeHandler(e.target.value);
  };

  const handleUnBanUser = () => {
    Swal.fire({
      title: `Bạn muốn Bỏ cấm người dùng  ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chắc Chắn",
      cancelButtonText: "Hủy Bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };

  const handleBanUser = () => {
    Swal.fire({
      title: `Bạn muốn  cấm người dùng ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chắc Chắn",
      cancelButtonText: "Hủy Bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };

  return (
    <LayoutDetail
      title="Danh Sách Người Dùng"
      titleBtn="Thêm Người Dùng"
      url={Epath.addUser}
    >
      <div className="mb-4">
        <Input
          control={control}
          name="orderId"
          placeholder="Tìm kiếm người dùng..."
          className="!w-[500px]"
          kind="search"
          onChange={handleChange}
        >
          <Search size={"18px"} />
        </Input>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        className="text-text1 font-semibold text-[16px]"
        pagination={
          dataUser.totalPages > 1
            ? {
                current: currentPage || 1,
                total: dataUser.totalResults,
                pageSize: pageSize,
                onChange: (page, pageSize) => {
                  setCurrentPage(page);
                  setPageSize(pageSize);
                },
              }
            : false
        }
      />
    </LayoutDetail>
  );
};

export default UsersPage;
