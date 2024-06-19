import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { handleLoginAdmin } from "../../../store/user/handleUser";
import { Epath } from "../../routes/routerConfig";
import { getTokenFromLocalStorage } from "../../../utils/localStorage";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ hoặc bị thiếu.")
    .required("Email không được để trống."),
  password: yup
    .string()
    .min(6, "Mật Khẩu phải có ít nhất 6 ký tự.")
    .max(30, "Mật Khẩu không được vượt quá 30 ký tự.")
    .required("Mật Khẩu không được để trống."),
});
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });

  const handleLoginForm = (data) => {
    console.log("🚀 ~ handleLoginForm ~ data:", data);

    dispatch(
      handleLoginAdmin({ ...data, callback: () => navigate(Epath.dashboard) })
    );
  };

  const { dataCurrentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const isAuthenticated = !!(
      dataCurrentUser &&
      Object.keys(dataCurrentUser).length &&
      getTokenFromLocalStorage()
    );
    if (isAuthenticated) {
      navigate(Epath.dashboard);
    }
  }, [dataCurrentUser, navigate]);

  return (
    <div className="pb-[140px] pt-[180px]  px-[300px] ">
      <div className="bg-white shadow-custom2 rounded-[14px]">
        <div className="flex justify-between">
          <div className="flex-1 bg-primary min-h-[450px] w-[400px] rounded-custom2 relative">
            <div className="absolute top-2/4 -translate-y-2/4 flex flex-col items-center gap-y-4">
              <h1 className="text-center text-[28px] text-white font-semibold">
                Admin
              </h1>
              <p className="text-white text-center px-5">
                MTSHOP - Chất lượng dịch vụ là ưu tiên hàng đầu của chúng ta.
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(handleLoginForm)}
            className="py-10 px-6 min-w-[400px] flex-1"
          >
            <h1 className="text-center text-[28px] text-textBold font-semibold  ">
              Đăng nhập
            </h1>

            <div className="flex flex-col gap-y-5 py-6 px-10">
              <Input
                control={control}
                name="email"
                placeholder="Nhập Email ...."
                error={errors.email?.message}
              ></Input>
              <Input
                control={control}
                name="password"
                placeholder="Nhập Mật Khẩu ...."
                error={errors.password?.message}
              ></Input>
            </div>

            <div className="w-full flex items-center justify-center">
              <Button
                kind="primary"
                className="py-3 px-[45px] w-[180px] rounded-md transition-all hover:opacity-90 "
                type="submit"
                isLoading={loading}
              >
                Đăng Nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
