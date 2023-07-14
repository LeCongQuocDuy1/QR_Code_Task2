import React, { useEffect, useState } from "react";
import { Spin, DatePicker } from "antd";
import icons from "../../utils/icons";
import Swal from "sweetalert2";
import MyTable from "../../components/MyTable";
import {
    apiGetCampaigns,
    apiSearchCampaign,
    apiCreateCampaign,
    apiShowCampaign,
} from "../../apis/campaign";
import MyModal from "../../components/MyModal";

const ManageCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [campaign, setCampaign] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [payload, setPayload] = useState(() => {
        const initData = {
            name: "",
            start_date: "",
            end_date: "",
            status: 0,
            reward_url: "",
        };
        return initData;
    });

    const onSubmit = async (data) => {
        const response = await apiCreateCampaign(data);
        console.log(response);
        if (response.status === "OK") {
            Swal.fire(
                "Congratulations!",
                "Thêm mới chiến dịch thành công!",
                "success"
            ).then(async () => {
                setPayload({
                    name: "",
                    start_date: "",
                    end_date: "",
                    status: 0,
                    reward_url: "",
                });
                setToggleModal(!toggleModal);
                await fetchCampaigns();
            });
        } else {
            Swal.fire("Oops!", `${response?.message}`, "error");
        }
    };

    // const handleClickDetail = async (id) => {
    //     setToggleModal(!toggleModal);
    //     const response = await apiShowCampaign(id);
    //     setCampaign(response.data);
    // };

    const handleQueryChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = async () => {
        const response = await apiSearchCampaign({ search: searchValue });
        if (response.status) {
            setCampaigns(response.data);
        }
    };
    const fetchCampaigns = async () => {
        const response = await apiGetCampaigns();
        if (response.status) {
            setCampaigns(response.data);
        }
    };
    useEffect(() => {
        fetchCampaigns();
    }, []);

    return (
        <div className="">
            <div className="p-[15px] bg-main rounded-sm w-full flex items-center justify-between">
                <h3 className="text-[18px] font-semibold text-[#fff]">
                    DANH SÁCH CHIẾN DỊCH
                </h3>
                <button
                    className="px-[10px] py-[6px] bg-[#fff] rounded-[4px] flex items-center gap-[5px]"
                    type="primary"
                    onClick={() => setToggleModal(!toggleModal)}
                >
                    <icons.BsPlusCircleFill className="text-[20px] text-main" />
                    <p className="text-[14px] font-semibold text-main">
                        THÊM MỚI
                    </p>
                </button>
            </div>
            {toggleModal && (
                <MyModal
                    onSubmit={onSubmit}
                    campaign={campaign}
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                    setCampaign={setCampaign}
                />
            )}
            <div className="flex flex-col">
                <div className="flex items-center justify-center py-[10px] border-b-2 border-[#ccc] gap-[10px]">
                    <div className="flex items-center gap-[6px] drop-shadow-md py-[8px] px-[15px] bg-[#fff] rounded-[3px]">
                        <icons.HiOutlineSearch
                            className="text-[18px] text-[#000]"
                            onClick={handleSearch}
                        />
                        <input
                            value={searchValue}
                            onChange={handleQueryChange}
                            onKeyDown={(e) => {
                                if (e.which === 13) {
                                    handleSearch();
                                }
                            }}
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
                    {campaigns?.length === 0 ? (
                        <div className="flex justify-center m-auto mt-[100px]">
                            <Spin tip="Loading data..." size="large">
                                <div className="content" />
                            </Spin>
                        </div>
                    ) : (
                        <MyTable
                            campaigns={campaigns}
                            toggleModal={toggleModal}
                            setToggleModal={setToggleModal}
                            // handleClickDetail={handleClickDetail}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageCampaigns;
