import path from "./path";
import icons from "./icons";

export const navigations = [
    {
        id: 1,
        icon: <icons.BiSolidDashboard className="text-[22px]" />,
        text: "Bảng điều khiển",
        path: `/${path.DASHBOARD}`,
    },
    {
        id: 2,
        icon: <icons.FaUserFriends className="text-[22px]" />,
        text: "Khách hàng mới",
        path: `/1`,
    },
    {
        id: 3,
        icon: <icons.BiSolidMessageAltError className="text-[22px]" />,
        text: "Giao dịch lỗi",
        path: `/2`,
    },
    {
        id: 4,
        icon: <icons.BiSolidBank className="text-[22px]" />,
        text: "Giao dịch trong ngày",
        path: `/3`,
    },
    {
        id: 5,
        icon: <icons.HiMiniFire className="text-[22px]" />,
        text: "Chiến dịch",
        path: `/${path.MANAGE_CAMPAIGNS}`,
    },
    {
        id: 6,
        icon: <icons.FiGift className="text-[22px]" />,
        text: "Mã thưởng",
        path: `/4`,
    },
    {
        id: 7,
        icon: <icons.TbReportAnalytics className="text-[22px]" />,
        text: "Báo cáo mã đã sử dụng",
        path: `/5`,
    },
    {
        id: 8,
        icon: <icons.RiFileUserFill className="text-[22px]" />,
        text: "Báo cáo người dùng",
        path: `/6`,
    },
    {
        id: 9,
        icon: <icons.FaMapMarkerAlt className="text-[22px]" />,
        text: "Báo cáo khu vực",
        path: `/7`,
    },
    {
        id: 10,
        icon: <icons.FaUsers className="text-[22px]" />,
        text: "Danh sách tài khoản",
        path: `/8`,
    },
    {
        id: 11,
        icon: <icons.RiSettings3Fill className="text-[22px]" />,
        text: "Cấu hình",
        path: `/9`,
    },
];
