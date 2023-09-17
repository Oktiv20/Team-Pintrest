/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import Signout from '../components/Signout';
import { getPinPinned } from '../api/userpinsData';
import SavedPinCard from '../components/SavedPinCard';

export default function Profile() {
  const { user } = useAuth();

  const [userSavedPins, setUserSavedPins] = useState([]);

  const getAllPinnedPins = () => {
    getPinPinned(user.uid).then(setUserSavedPins);
  };

  useEffect(() => {
    getAllPinnedPins();
  }, []);

  return (
    <>
      <User userObj={user} />
      <div className="pinSection">
        <div className="text-center d-flex flex-wrap">
          {userSavedPins.map((pin) => (
            <SavedPinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllPinnedPins} />
          ))}
        </div>
      </div>
      <Signout />
    </>
  );
}
