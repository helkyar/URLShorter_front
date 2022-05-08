import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
export default function delTemplate(id) {
  return axios
    .delete(`${ENDPOINT}/urls/delete/${id}`)
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      console.log("TEMPLATE DEL", res.data);
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
