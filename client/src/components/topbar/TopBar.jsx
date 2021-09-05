import "./style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  return (
    <div className="top">
      <div className="div topLeft">
        <a
          href="https://github.com/SpaceDandyA80"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <i className="topIcon fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/guillermo-garcia-57140a1a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPYxqXGVkQuSZ5A%2B2j25K3g%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <i className="topIcon fab fa-linkedin"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              POST
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt="add profile pic"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>

            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
