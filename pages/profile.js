/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import Signout from '../components/Signout';
import PinCard from '../components/PinCard';
import { getPinPinned } from '../api/pinsData';

export default function Profile() {
  const { user } = useAuth();

  const [userPins, setUserPins] = useState([]);

  const getAllUserPins = () => {
    getPinPinned(user.uid).then(setUserPins);
  };

  useEffect(() => {
    getAllUserPins();
  }, []);
  return (
    <>
      <User userObj={user} />
      <Signout />
      <div className="text-center d-flex flex-wrap">
        {userPins.map((pin) => (
          <PinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllUserPins} />
        ))}
      </div>
    </>
  );
}
