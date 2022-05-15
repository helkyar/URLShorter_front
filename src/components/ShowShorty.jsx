import { useSession } from "helpers/session/useSession";
import { Link } from "react-router-dom";
import edit from "assets/img/edit.svg";
import del from "assets/img/delete.svg";

import delUserUrl from "helpers/urls/delUserUrl";
import patchUserUrl from "helpers/urls/patchUserUrl";
import { useContext, useEffect, useState } from "react";
import Context from "contexts/user";
const urlDivWith = 48 / 100;
const fontSize = 9.5;

export const ShowShorty = ({ short, setOnOpen, setSave }) => {
  const { isLogged } = useSession();
  const { jwt } = useContext(Context);
  const [urlSize, setUrlSize] = useState(
    (window.innerWidth * urlDivWith) / fontSize
  );

  const [editMode, setEditMode] = useState(false);
  const [urlid, setUrlid] = useState(short.urlid);
  const [url, setUrl] = useState(short.url);

  useEffect(() => {
    function handleResize() {
      let { innerWidth } = window;
      setUrlSize((innerWidth * urlDivWith) / fontSize);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      process.env.REACT_APP_SHORT_URL + short.urlid
    );
  };
  const handleSave = async () => {
    await setSave({ saving: true, url: short.url });
    setOnOpen(true);
  };
  const handleEdit = async () => {
    if (editMode) {
      const data = { urlid, url };
      await patchUserUrl(data, short._id, jwt);
      await setSave({ saving: false, rerender: true });
    }
    setEditMode((state) => !state);
  };
  const handleDelete = async () => {
    await delUserUrl(short._id, jwt);
    await setSave({ saving: false, rerender: true });
  };

  return (
    <section className="shorty-show">
      <div className="shorty-url">
        <div
          className={short?.url.length > urlSize && !editMode ? "ellipsis" : ""}
        >
          {!editMode ? (
            <p>{short.url}</p>
          ) : (
            <input value={url} onChange={(e) => setUrl(e.target.value)} />
          )}
        </div>

        {!editMode ? (
          <Link to={`shorty/${short.urlid}`}>
            {`${process.env.REACT_APP_SHORT_URL}${short.urlid}`}
          </Link>
        ) : (
          <input value={urlid} onChange={(e) => setUrlid(e.target.value)} />
        )}
      </div>
      <div className="shorty-options">
        <button className="btn shorty-copy" onClick={handleCopy}>
          Copy!
        </button>

        {!isLogged && (
          <button className="btn shorty-save" onClick={handleSave}>
            Save
          </button>
        )}
        {isLogged && (
          <>
            <button className="btn shorty-edit" onClick={handleEdit}>
              {!editMode ? <img src={edit} alt="edit" /> : "Save"}
            </button>
            <button className="btn shorty-del" onClick={handleDelete}>
              <img src={del} alt="delete" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};
