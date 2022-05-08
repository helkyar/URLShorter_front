import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
export default function patchTemplate(params, id) {
  return axios
    .patch(`${ENDPOINT}/urls/update/${id}`, params)
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      console.log("TEMPLATE PATCH", res.data);
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
