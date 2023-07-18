import React from "react";
import icons from "../utils/icons";

const MyModal2 = () => {
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
                <form>
                    <div className="w-full px-[10px]">
                        <div className="flex justify-end w-[100%] p-6">
                            <button className="px-[15px] py-[10px] bg-main border rounded-md text-[#fff] flex jc">
                                Thêm mới
                            </button>
                        </div>
                        <div className="">
                            <div className="flex pb-10">
                                <div className="w-[95%] grid grid-cols-3 gap-[40px] mb-[10px]">
                                    <div className="flex flex-col border-b-[1px] border-[#999] pb-[8px] mb-[20px]">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#999] mb-[5px]"
                                        >
                                            Mệnh giá
                                        </label>
                                        <input
                                            className="border-none outline-none text-[16px] text-[#000]"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col border-b-[1px] border-[#999] pb-[8px] mb-[20px]">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#999] mb-[5px]"
                                        >
                                            Số lượng in mã QR
                                        </label>
                                        <input
                                            className="border-none outline-none text-[16px] text-[#000]"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col border-b-[1px] border-[#999] pb-[8px] mb-[20px]">
                                        <label
                                            htmlFor=""
                                            className="text-[13px] text-[#999] mb-[5px]"
                                        >
                                            Hạn ngạch nhận thưởng
                                        </label>
                                        <input
                                            className="border-none outline-none text-[16px] text-[#000]"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <button className="p-5" type="button">
                                    <icons.CiCircleRemove className="text-[#000] text-[30px] font-bold cursor-pointer" />
                                </button>
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

export default MyModal2;
