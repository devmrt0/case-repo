import React from 'react';
import UserProfile from '../../common/UserProfile/UserProfile';

let group = require('../../img/group.png');

export default function Header() {
  return (
    <div className="messages__header">
      <div className="messages__header__left-content">
        {/*<UserProfile name="Botty" icon="fas fa-comment-dots" color="#4DB8EF" />*/}
        <div className="messages__header__left-content__text" style={{paddingLeft:"60px"}}>
          <h1><img src={group} width="65" height="15" /> <div className="messages__header__online-dot" /></h1>
          <p>Cloud, The Internet</p>
        </div>
      </div>
      <div className="messages__header__right-content">
        <div className="messages__header__status">
          <i className="mdi mdi-eye-outline" />
          <p className="no-margin">botty-beep-boop</p>
        </div>
        <div className="messages__header__status">
          <i className="far fa-clock" />
          <p className="no-margin">5m</p>
        </div>
      </div>
    </div>
  );
}