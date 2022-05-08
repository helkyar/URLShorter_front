import { useSession } from "helpers/session/useSession";
import { Link } from "react-router-dom";
import edit from "assets/img/edit.svg";
import del from "assets/img/delete.svg";

import delUrl from "helpers/urls/delUrl";
import patchUrl from "helpers/urls/patchUrl";

export const ShowShorty = ({ short, setOnOpen, setSave }) => {
  const { isLogged } = useSession();

  const handleCopy = () => {
    navigator.clipboard.writeText(
      process.env.REACT_APP_SHORT_URL + short.urlid
    );
  };
  const handleSave = () => {
    setSave({ saving: true, url: short.url });
    setOnOpen(true);
  };
  const handleEdit = async () => {
    await patchUrl();
  };
  const handleDelete = async () => {
    await delUrl(short._id);
    setSave({ saving: false, rerender: true });
  };

  return (
    <section className="shorty-show">
      <div className="shorty-url">
        <div className={short?.url.length > 30 ? "ellipsis" : ""}>
          <p>{short.url}</p>
        </div>
        <Link to={`shorty/${short.urlid}`}>
          {`${process.env.REACT_APP_SHORT_URL}${short.urlid}`}
        </Link>
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
              <img src={edit} alt="edit" />
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
