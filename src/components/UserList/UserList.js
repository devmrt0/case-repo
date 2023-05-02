import React, { useContext } from 'react';
import cx from 'classnames';
import LatestMessagesContext from '../../contexts/LatestMessages';
import UserProfile from '../../common/UserProfile/UserProfile';
import USERS from './users';
import './_user-list.scss';


let group = require('../../img/group.png');
let of = require('../../img/of.png');

function User({ icon, name, lastActive, isOnline, userId, color, img, boldie, boldieimg }) {
  const { messages } = useContext(LatestMessagesContext);

  return (
    <div className="user-list__users__user">
      <UserProfile img={img} icon={icon} name={name} color={color} />
      <div className="user-list__users__user__right-content">
        <div className="user-list__users__user__title">
          {!img &&
            <p>{name}</p>
          }
          {img &&
            <p><img src={group} width="65" height="15" /></p>
          }
          <p className={cx({ 'user-list__users__user__online': isOnline })}>
            {isOnline ? 'Online' : lastActive}
          </p>
        </div>
        {(!boldie && !boldieimg) &&
          <p>{messages[userId]}</p>
        }
        {(boldie && !boldieimg) &&
          <p style={{ fontWeight: "500", color: "black" }}>{messages[userId]}</p>
        }
        {(!boldie && boldieimg) &&
          <p><img src={of} width="155" height="15" /></p>
        }
      </div>
    </div>
  );
}

export default function UserList() {
  return (
    <div className="user-list">
      <div className="user-list__header">
        <div className="user-list__header__left">
          <p>All Messages</p>
          <i className="fas fa-chevron-down" />
        </div>
        <i className="fas fa-cog" />
      </div>
      <div className="user-list__users">
        {USERS.map(user => <User key={user.name} {...user} />)}
      </div>
    </div>
  );
}