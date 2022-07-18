import React from "react";
import "./css/connectItem.css";
import { Link } from "react-router-dom";

function ConnectItem({ data }) {
  const json = JSON.stringify(data.contents, null, "\n");
  return (
    <Link
      to={`/item/${data.address}`}
      state={{
        id: data.id,
        title: data.title,
        img: data.main_img,
        address: data.address,
        contents: data.contents,
      }}
      className="link-item"
      style={{ textDecoration: "none" }}
    >
      <li className="item-list">
        <div className="title">{data.title}</div>
        <div className="content">{data.contents.replace("@", "\n")}</div>
        <div className="img">
          <img src={`./img/${data.img}`} alt={data.title} />
        </div>
      </li>
    </Link>
  );
}

export default ConnectItem;
