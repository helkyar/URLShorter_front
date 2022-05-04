import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;

export default function postUrl(params) {
  return axios
    .post(`${ENDPOINT}/urls/add`, params)
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      console.log("TEMPLATE POST", res.data);
      return res.data;
    })
    .catch(() => {
      return null;
    });
}
