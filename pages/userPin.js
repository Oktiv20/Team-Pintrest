/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getUserPins } from '../api/userpinsData';
import UserPinCard from '../components/UserPinCard';

function UserPin() {
  const { user } = useAuth();

  const [userPins, setUserPins] = useState([]);

  const getAllUserPins = () => {
    getUserPins(user.uid).then(setUserPins);
  };

  useEffect(() => {
    getAllUserPins();
  }, []);

  return (
    <div className="pinSection">
      <div className="text-center d-flex flex-wrap">
        {userPins.map((pin) => (
          <UserPinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllUserPins} />
        ))}
      </div>
    </div>
  );
}

export default UserPin;
