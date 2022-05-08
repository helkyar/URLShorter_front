import React, { useContext, useState } from "react";
import logo from "assets/img/icon.png";
import { useSession } from "helpers/session/useSession";
import Modal from "./Modal";

export const Header = () => {
  const { logout, isLogged } = useSession();
  const [modal, setModal] = useState(false);
  const [logView, setLogView] = useState(true);

  const openModal = (view) => {
    view === "login" ? setLogView(true) : setLogView(false);
    setModal(true);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" /> <h1>Shorty</h1>
      </div>

      <nav>
        {!isLogged && (
          <>
            <p onClick={() => openModal("login")}>Login</p>
            <p onClick={() => openModal("register")}>Sign Up</p>
          </>
        )}
        {isLogged && <p onClick={() => logout()}>Logout</p>}
      </nav>
      <Modal
        onOpen={modal}
        setOnOpen={setModal}
        logView={logView}
        setLogView={setLogView}
      />
    </header>
  );
};
