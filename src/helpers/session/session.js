import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;

export default function startSession(sessionParams, endpoint) {
  return axios
    .post(`${ENDPOINT}/session/${endpoint}`, sessionParams)
    .then((res) => {
      console.log(res.data);
      if (!res.data.token) throw new Error("Response is NOT ok");
      return res.data;
    })
    .catch((err) => {
      console.log("ERR: 500", err);
    });
}
