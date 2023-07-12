import axios from "../axios";

export const apiGetCampaigns = () =>
    axios({
        url: "/campaigns/",
        method: "GET",
    });
