import React from 'react';
import './_user-profile.scss';

function getInitials(string) {
  return string.match(/\b(\w)/g).slice(0, 2).join('').toUpperCase();
}

export default function UserProfile({ color, name, icon, img }) {
  return (
    <div className="user-profile" style={{ background: color }}>
      {img ? img : icon ? <i className={icon} /> : <p>{getInitials(name)}</p>}
    </div>
  );
}