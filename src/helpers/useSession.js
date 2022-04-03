import { useCallback, useContext } from "react";
import Context from "../contexts/user";
import loginSrv from "./login";
import { useNavigate } from "react-router-dom";

export const useSession = () => {
  const navigate = useNavigate();
  const { jwt, setJWT, user, setUser } = useContext(Context);
  let logfail = false;
  const loger = useCallback(
    ({ login, password }) => {
      loginSrv({ login, password })
        .then(({ token, rol, login, id }) => {
          window.sessionStorage.setItem("jwt", token);
          window.sessionStorage.setItem("user", `${id}, ${login}, ${rol}`);
          setJWT(token);
          setUser(`${id}, ${login}, ${rol}`);
        })
        .catch((err) => {
          logfail = true;
          window.sessionStorage.removeItem("jwt");
          window.sessionStorage.removeItem("user");
          console.error(err);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    window.sessionStorage.removeItem("user");
    setJWT(null);
    setUser(null);
    navigate("/login");
  }, [setJWT]);

  return { user, logout, loger, isLogged: Boolean(jwt), logfail };
};
