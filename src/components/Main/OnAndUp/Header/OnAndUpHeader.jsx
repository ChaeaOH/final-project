import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import "./css/header.css";
import { BiUser } from "react-icons/bi";

function OnAndUpHeader({ LoginAuth, setLoginAuth }) {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/chemiverseOnUp/login');
  }
  const [item, setItem] = useState([]);
  const onAndUpMenuData = "/db/onAndUpMenuData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(onAndUpMenuData);
      const json = await response.json();
      setItem(json);
    })();
  }, []);
  return (
    <div id="header">
      <Link className="logo" to="/chemiverseOnUp">
        logo
      </Link>
      <div className="main-item">
        <ul className="gnb">
          {item.map((item) => (
            <li>
              <NavLink
                to={`/chemiverseOnUp/item/${item.onAndUpItemAddress}`}
                key={item.id}
                state={{
                  id: item.id,
                  menu: item.menu,
                  dep: item.dep,
                  address: item.address,
                }}
              >
                <span>{item.menu}</span>
              </NavLink>
              <ul className="depth1">
                <NavLink
                  to={`/chemiverseOnUp/item/${item.address}`}
                  key={item.id}
                  state={{
                    id: item.id,
                    menu: item.menu,
                    dep: item.dep,
                    address: item.onAndUpItemAddress,
                  }}
                >
                  {item.dep.map((ele) => (
                    <li className="depth1Li">{ele}</li>
                  ))}
                </NavLink>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-item">
        <ul className="util">
          <li id="mypage">
            <NavLink to={`/chemiverseOnUp/mypage`}>
              <BiUser />
            </NavLink>
          </li>
          {
            LoginAuth ?
              <span onClick={() => setLoginAuth(false)}>로그아웃</span> :
              <span onClick={() => goToLogin()}>로그인</span>
          }
          <button id="tab-btn">
            <NavLink
              to={`/chemiverseOnUp/tab`}
              state={{
                id: item.id,
                menu: item.menu,
                dep: item.dep,
                address: item.address,
              }}
            >
              탭버튼
            </NavLink>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default OnAndUpHeader;
