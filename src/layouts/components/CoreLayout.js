import React from 'react';
import { LatestMessages } from '../../contexts/LatestMessages';
import ContactPanel from '../../components/ContactPanel/ContactPanel';
import UserList from '../../components/UserList/UserList';
import Messages from '../../components/Messages/Messages';
import IconBackground from './IconBackground';
import '../styles/_core-layout.scss';

export default function CoreLayout() {
  return (
    <div className="core">
      <IconBackground />
      <LatestMessages>
        <UserList />
        <Messages />
        <ContactPanel />
     </LatestMessages>
    </div>
  );
}