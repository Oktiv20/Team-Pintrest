import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function Signout() {
  return (
    <div className="signOutBtn">
      <Button type="button" variant="danger" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Signout;
