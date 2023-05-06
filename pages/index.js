import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getPins } from '../api/pinsData';
import PinCard from '../components/PinCard';

function Pin() {
  const { user } = useAuth();

  const [userPins, setPins] = useState([]);

  const getAllPins = () => {
    getPins(user.uid).then(setPins);
  };

  useEffect(() => {
    getAllPins();
  }, []);

  return (
    <div className="text-center d-flex flex-wrap">
      {userPins.map((pin) => (
        <PinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllPins} />
      ))}
    </div>
  );
}

export default Pin;
