import React from 'react';
import { topHead } from './_sidePanelStyle';

const Nav: React.FC<unknown> = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={topHead}>
      <div className="wrap-container flex-menu">
        <div className="side-one">
          <div className="logo">
            <img
              alt="logo"
              className="svg"
              src="https://luwjistik.com/assets/img/header-logo.svg"
            />
          </div>
        </div>
        <div className="side-two spare-menu">
          <nav>
            <ul>
              <li>Welcome, Users</li>
            </ul>
          </nav>
          <div className="account">
            <div className="btn-bag" onClick={() => logout()}>
              Logout
            </div>
          </div>
          {
            // logo
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;
