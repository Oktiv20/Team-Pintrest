import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { deleteUserPin, createSavedPin } from '../api/userpinsData';
import { useAuth } from '../utils/context/authContext';

export default function PinCard({ pinObj, onUpdate }) {
  const deleteThisPin = () => {
    if (window.confirm(`Delete ${pinObj.description}?`)) {
      deleteUserPin(pinObj.firebaseKey).then(() => onUpdate());
    }
  };

  const router = useRouter();
  const { user } = useAuth();

  const handleSaveClick = (e) => {
    e.preventDefault();
    const payload = { uid: user.uid, pin_id: pinObj.firebaseKey };
    createSavedPin(payload).then(() => {
      router.push('/profile');
    });
  };

  return (
    <div className="pin-area">
      <div className="single-pin">
        <Card style={{
          width: '18rem', margin: '-10px', color: 'white', textAlign: 'text-center', border: 'none',
        }}
        >
          <Card.Body>
            <Button>
              <Card.Img className="pinImage" variant="top" src={pinObj.image} alt={pinObj.image} style={{ height: '350px' }} />
              <Card.ImgOverlay>
                <Button variant="danger" onClick={handleSaveClick} className="m-2">Save</Button>
                <br />
                <h5 className="card-text bold">{pinObj.title}</h5>
                <h5 className="card-text bold">{pinObj.description}</h5>
                <h5 className="card-text bold">{pinObj.destinationLink}</h5>
                <div>
                  <Link href={`/pin/edit/${pinObj.firebaseKey}`} passHref className="card-text bold">
                    <Button variant="info" className="card-text bold">EDIT</Button>
                  </Link>
                  <Button className="card-text bold" variant="danger" onClick={deleteThisPin}>
                    DELETE
                  </Button>
                </div>
              </Card.ImgOverlay>
            </Button>
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
  onUpdate: PropTypes.func.isRequired,
};
