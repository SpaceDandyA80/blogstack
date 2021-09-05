import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [cats, setCat] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCat(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">More Info</span>
        <img
          src="https://images.unsplash.com/photo-1547968196-230ad3b7cbf7"
          alt="forest pic"
          className="sidebarImg"
        />
        <p>Your source of finding new ways for people to find out about you</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link" key={c.name}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CONTACT ME</span>
        <div className="sidebarMedia">
          <a
            href="https://github.com/SpaceDandyA80"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <i className="sidebarIcon fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/guillermo-garcia-57140a1a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPYxqXGVkQuSZ5A%2B2j25K3g%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <i className="sidebarIcon fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
