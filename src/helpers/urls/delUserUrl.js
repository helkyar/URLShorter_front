import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
export default function delUserUrl(id, jwt) {
  return axios
    .delete(`${ENDPOINT}/user-urls/delete/${id}`, {
      headers: {
        "auth-token": jwt,
      },
    })
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      return res.data;
    })
    .catch((e) => {
      throw new Error(`Error in delte user url: ${e}`);
    });
}
