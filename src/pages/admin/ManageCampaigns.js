import React, { useEffect, useState } from "react";
import icons from "../../utils/icons";
import { DatePicker } from "antd";
import MyTable from "../../components/MyTable";
import { apiGetCampaigns } from "../../apis/campaign";
import { Spin } from "antd";

const ManageCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);

    const fetchCampaigns = async () => {
        const response = await apiGetCampaigns();
        if (response.status) {
            setCampaigns(response.data);
        }
    };

    console.log(campaigns);

    useEffect(() => {
        fetchCampaigns();
    }, []);

    return (
        <div className="">
            <div className="p-[15px] bg-main rounded-sm w-full flex items-center justify-between">
                <h3 className="text-[18px] font-semibold text-[#fff]">
                    DANH SÁCH CHIẾN DỊCH
                </h3>
                <button className="px-[10px] py-[6px] bg-[#fff] rounded-[4px] flex items-center gap-[5px]">
                    <icons.BsPlusCircleFill className="text-[20px] text-main" />
                    <p className="text-[14px] font-semibold text-main">
                        THÊM MỚI
                    </p>
                </button>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-center py-[10px] border-b-2 border-[#ccc] gap-[10px]">
                    <div className="flex items-center gap-[6px] drop-shadow-md py-[8px] px-[15px] bg-[#fff] rounded-[3px]">
                        <icons.HiOutlineSearch className="text-[18px] text-[#000]" />
                        <input
                            type="text"
                            className="border-none outline-none bg-transparent text-[16px]"
                            placeholder="Nhập tên chiến dịch"
                        />
                    </div>
                    <DatePicker
                        inputReadOnly={true}
                        placeholder="Từ ngày"
                        className="py-[8px] text-[15px] font-semibold cursor-pointer placeholder:text-[#000]"
                        onChange={(date) => console.log(date?.$d)}
                    />
                    <DatePicker
                        inputReadOnly={true}
                        placeholder="Đến ngày"
                        className="py-[8px] text-[15px] font-semibold cursor-pointer placeholder:text-[#000]"
                        onChange={(date) => console.log(date?.$d)}
                    />
                    <button className="px-[10px] py-[8px] bg-[#fff] border-[1px] border-main rounded-[4px] flex items-center gap-[5px]">
                        <icons.TbZoomReset className="text-[20px] text-main" />
                        <p className="text-[14px] font-semibold text-main">
                            LỌC
                        </p>
                    </button>
                </div>
                <div className="">
                    {campaigns.length === 0 ? (
                        <div className="flex justify-center m-auto mt-[100px]">
                            <Spin tip="Loading data..." size="large">
                                <div className="content" />
                            </Spin>
                        </div>
                    ) : (
                        <MyTable campaigns={campaigns} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageCampaigns;
