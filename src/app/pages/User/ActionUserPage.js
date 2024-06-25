import React from "react";
import LayoutDetail from "../../components/Layout/LayoutDetail";
import { useForm } from "react-hook-form";
import Box from "../../components/Commom/Box";
import ImageUpload from "../../components/Image/ImageUpload";
import BoxFiled from "../../components/Commom/BoxFiled";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Epath } from "../../routes/routerConfig";
import { useParams } from "react-router-dom";

const ActionUserPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    // resolver: yupResolver(InfoSettingSchema),
    mode: "onChange",
  });

  const { id } = useParams();

  return (
    <div>
      <LayoutDetail title="Thêm Người Dùng">
        <form action="">
          <Box title="Cài Đặt Tài Khoản">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-center mt-3">
                <ImageUpload
                  className="w-[200px] h-[200px] rounded-full"
                  name="avatar"
                  onChange={(name, data) => setValue("avatar", data.url)}
                  // getValues={getValues("avatar") || dataCurrentUser?.avatar}
                  setValue={setValue}
                ></ImageUpload>
              </div>
              <BoxFiled title="Tên " className="w-full">
                <Input
                  control={control}
                  name="userName"
                  placeholder="Tên của bạn..."
                  error={errors.userName?.message}
                ></Input>
              </BoxFiled>
              <BoxFiled title="Email " className="w-full">
                <Input
                  control={control}
                  name="email"
                  placeholder="Email của bạn..."
                  error={errors.email?.message}
                ></Input>
              </BoxFiled>
              <BoxFiled title="Số điện thoại " className="w-full">
                <Input
                  control={control}
                  name="phoneNumber"
                  placeholder="Số điện thoại của bạn..."
                  error={errors.phoneNumber?.message}
                ></Input>
              </BoxFiled>

              <BoxFiled title="Mật Khẩu " className="w-full">
                <Input
                  control={control}
                  name="password"
                  placeholder="Mật Khẩu mới của bạn..."
                  type="password"
                ></Input>
              </BoxFiled>

              <div className="flex items-center justify-center gap-x-3 mt-6">
                <Button
                  className="py-3 px-4 rounded-lg overflow-hidden w-[200px] hover:opacity-85"
                  kind="discard"
                  type="submit"
                  href={Epath.users}
                >
                  Quay Lại
                </Button>

                {id ? (
                  <Button
                    className="py-3 px-4 rounded-lg overflow-hidden w-[200px] hover:opacity-85"
                    kind="primary"
                    type="submit"
                  >
                    Cập Nhật
                  </Button>
                ) : (
                  <Button
                    className="py-3 px-4 rounded-lg overflow-hidden w-[200px] hover:opacity-85"
                    kind="primary"
                    type="submit"
                  >
                    Thêm
                  </Button>
                )}
              </div>
            </div>
          </Box>
        </form>
      </LayoutDetail>
    </div>
  );
};

export default ActionUserPage;
