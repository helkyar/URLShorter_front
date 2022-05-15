import { Header } from "components/Header";
import Modal from "components/Modal";
import { ShowShorty } from "components/ShowShorty";
import Context from "contexts/user";
import postUrl from "helpers/urls/postUrl";
import getUserUrls from "helpers/urls/getUserUrls";
import React, { useContext, useEffect, useState } from "react";
import { useSession } from "helpers/session/useSession";

export const Main = () => {
  const { user, jwt } = useContext(Context);
  const { isLogged } = useSession();

  const [url, setUrl] = useState("");
  const [short, setShort] = useState([]);
  const [save, setSave] = useState({ saving: false });

  const [modal, setModal] = useState(false);
  const [logView, setLogView] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const processedUrl = url.split(/^https?:\/\//).filter((e) => e !== "")[0];
    if (processedUrl.startsWith(process.env.REACT_APP_DOMAIN)) {
      alert("Invalid domain");
      return;
    }
    if (!isLogged) {
      const shorty = await postUrl({ url });
      setShort([shorty]);
    } else {
      await postUrl({ url, user: user.id });
      const shorty = await getUserUrls(user.id, jwt);
      setShort(shorty);
    }
    setUrl("");
  };

  useEffect(() => {
    const userUrls = async () => {
      if (user?.id) {
        const shortys = await getUserUrls(user.id, jwt);
        if (shortys) {
          await setShort(shortys);
        }
      } else {
        setShort([]);
      }
    };
    userUrls();
  }, [user, save]);

  useEffect(() => {
    const saveUrl = async () => {
      await postUrl({ url: save.url, user: user.id });
      setSave({ saving: false });
    };
    if (user?.id && save.saving) {
      saveUrl();
    }
  }, [user, save]);

  return (
    <>
      <Header />
      <main className="app">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder=" Enter your long URL to make it Shorty"
          />
          <button className="btn-second action-btn">Short it!</button>
        </form>
        {short[0] && (
          <div className="shorty-container">
            {short.map((urls, i) => (
              <ShowShorty
                key={`short-${i}`}
                short={urls}
                setOnOpen={setModal}
                save={save}
                setSave={setSave}
              />
            ))}
          </div>
        )}
      </main>
      <Modal
        onOpen={modal}
        setOnOpen={setModal}
        logView={logView}
        setLogView={setLogView}
      />
    </>
  );
};
