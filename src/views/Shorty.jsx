import getUrl from "helpers/urls/getUrl";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Shorty = () => {
  const navigate = useNavigate();

  useEffect(async () => {
    const urlid = window.location.href.split("shorty/")[1];
    const url = await getUrl(urlid.trim());
    if (url && url.url) {
      window.location.replace(`http://${url.url}`);
    }
    navigate("/");
  });

  return <></>;
};
