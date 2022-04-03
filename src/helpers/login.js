import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;

export default function loger(sessionParams) {
  return axios.post(`${ENDPOINT}/login`, sessionParams).then((res) => {
    if (!res.data.token) throw new Error("Response is NOT ok");
    return res.data;
  });
}
