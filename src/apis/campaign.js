import axios from "../axios";

export const apiGetCampaigns = (params) =>
    axios({
        method: "GET",
        url: "/campaigns/",
        params: params || "",
    });

export const apiShowCampaign = (cid) =>
    axios({
        method: "GET",
        url: "/campaigns/" + cid,
    });

export const apiSearchCampaign = (search) =>
    axios({
        method: "GET",
        url: "/campaigns/",
        params: search,
    });

export const apiCreateCampaign = (data) =>
    axios({
        method: "POST",
        url: "/campaigns/",
        data,
    });

export const apiUpdateCampaign = (cid, data) =>
    axios({
        method: "PUT",
        url: "/campaigns/" + cid,
        data,
    });
