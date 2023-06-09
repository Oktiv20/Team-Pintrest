import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { createSavedPin } from '../api/userpinsData';
import { useAuth } from '../utils/context/authContext';
// import { deleteSinglePin } from '../api/pinsData';

export default function PinCard({ pinObj }) {
  // const [viewPinDetails, setPinDetails] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  // const { firebaseKey } = router.query;

  const handleSaveClick = (e) => {
    e.preventDefault();
    const payload = {
      uid: user.uid, pin_id: pinObj.firebaseKey, image: pinObj.image, title: pinObj.title, description: pinObj.description, destinationLink: pinObj.destinationLink,
    };
    createSavedPin(payload).then(() => {
      router.push('/profile');
      console.warn(pinObj);
    });
  };

  // const handleClickDetails = (e) => {
  //   e.preventDefault();
  //   viewPinDetails(firebaseKey).then(setPinDetails);
  // };

  return (
    <div className="pin-area">
      <div className="single-pin">
        <Card style={{
          width: '18rem', color: 'white', textAlign: 'text-center', border: 'none',
        }}
        >
          <Card.Body>
            <Card.Img className="pinImage" variant="top" src={pinObj.image} alt={pinObj.image} style={{ height: '350px' }} />
            <Card.ImgOverlay>
              <Button variant="danger" onClick={handleSaveClick} className="card-unsave">Save</Button>
              <h5 className="card-text bold">{pinObj.title}</h5>
              <h5 className="card-text bold">{pinObj.description}</h5>
              <h5 className="card-text bold">{pinObj.destinationLink}</h5>
            </Card.ImgOverlay>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

PinCard.propTypes = {
  pinObj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    destinationLink: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
