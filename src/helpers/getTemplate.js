import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;

export default function getTemplate(id) {
  return axios
    .get(`${ENDPOINT}/template/id/${id}`)
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      console.log("TEMPLATE GET", res.data);
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
