import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
    .object()
    .shape({
        name: yup.string().required("Tên chiến dịch không được bỏ trống"),
        reward_url: yup
            .string()
            .required("Địa chỉ trang nhận thưởng không được bỏ trống"),
        start_date: yup
            .string()
            .required(
                "Thời gian bắt đầu trang nhận thưởng không được bỏ trống"
            ),
        end_date: yup
            .string()
            .required(
                "Thời gian kết thúc trang nhận thưởng không được bỏ trống"
            ),
    })
    .required();

const MyModal = ({
    onSubmit,
    toggleModal,
    setToggleModal,
    // campaign,
    // setCampaign,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleCancel = () => {
        // setCampaign(null);
        setToggleModal(!toggleModal);
    };

    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center m-auto bg-overlay z-20">
            <div className="w-[80%] bg-[#fff] shadow-sm rounded-md">
                <div className="bg-main w-full p-[15px]">
                    <div className="flex items-center">
                        <div className="uppercase px-[10px] py-[10px] rounded-md text-[#fff] cursor-pointer font-semibold bg-[#ffffff35]">
                            Thông tin
                        </div>
                        <div className="uppercase px-[10px] py-[10px] rounded-md text-[#fff] cursor-pointer font-semibold">
                            Cấu hình
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-[10px] p-[20px]"
                >
                    <input
                        type="hidden"
                        name="id"
                        // value={campaign ? campaign?.campaign_id : ""}
                    />
                    <div className="grid grid-cols-2 gap-[30px] w-full">
                        <div className="">
                            <div className="flex flex-col border-b-[1px] border-[#999] pb-[8px] mb-[20px]">
                                <label className="text-[13px] text-[#999] mb-[5px]">
                                    Trạng thái
                                </label>
                                <select
                                    name="status"
                                    className="border-none outline-none text-[16px] text-[#000]"
                                    {...register("status")}
                                >
                                    <option
                                        value="0"
                                        // selected={campaign?.status.id}
                                    >
                                        Nháp
                                    </option>
                                    <option
                                        value="1"
                                        // selected={campaign?.status.id}
                                    >
                                        Hoạt động
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col border-b-[1px] border-[#999] pb-[8px] mb-[20px]">
                                <label className="text-[13px] text-[#999] mb-[5px]">
                                    Thời gian bắt đầu
                                </label>
                                <input
                                    type="date"
                                    // value={
                                    //     campaign
                                    //         ? campaign?.start_date.split(" ")[0]
                                    //         : ""
                                    // }
                                    name="start_date"
                                    className="border-none outline-none text-[16px] text-[#000]"
                                    {...register("start_date")}
                                />
                                <p className="error">
                                    {errors.start_date?.message}
                                </p>
                            </div>
                            <div className="flex flex-col border-b-[1px] border-[#999] pb-[8px] mb-[20px]">
                                <label className="text-[13px] text-[#999] mb-[5px]">
                                    Địa chỉ trang nhận thưởng
                                </label>
                                <input
                                    type="text"
                                    // value={campaign ? campaign?.reward_url : ""}
                                    name="reward_url"
                                    className="border-none outline-none text-[16px] text-[#000]"
                                    {...register("reward_url")}
                                />
                                <p className="error">
                                    {errors.reward_url?.message}
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col border-b-[1px] border-[#999] pb-[8px] mb-[20px]">
                                <label className="text-[13px] text-[#999] mb-[5px]">
                                    Tên chiến dịch
                                </label>
                                <input
                                    // value={campaign ? campaign?.name : ""}
                                    type="text"
                                    name="name"
                                    className="border-none outline-none text-[16px] text-[#000]"
                                    {...register("name")}
                                />
                                <p className="error">{errors.name?.message}</p>
                            </div>
                            <div className="flex flex-col border-b-[1px] border-[#999] pb-[8px] mb-[20px]">
                                <label className="text-[13px] text-[#999] mb-[5px]">
                                    Thời gian kết thúc
                                </label>
                                <input
                                    type="date"
                                    // value={
                                    //     campaign
                                    //         ? campaign?.end_date.split(" ")[0]
                                    //         : ""
                                    // }
                                    name="end_date"
                                    className="border-none outline-none text-[16px] text-[#000]"
                                    {...register("end_date")}
                                />
                                <p className="error">
                                    {errors.end_date?.message}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[5px] mt-[20px]">
                        <button
                            type="submit"
                            className="bg-main py-[10px] w-[90px] rounded-md text-[#fff]"
                        >
                            Lưu
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-[#999] py-[10px] w-[90px] rounded-md text-[#fff]"
                        >
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyModal;
