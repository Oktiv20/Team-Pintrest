import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { createSavedPin } from '../api/userpinsData';
// import { useAuth } from '../utils/context/authContext';
import { deleteSinglePin } from '../api/pinsData';

export default function UserPinCard({ pinObj, onUpdate }) {
  const deleteThisPin = () => {
    if (window.confirm(`Delete ${pinObj.description}?`)) {
      deleteSinglePin(pinObj.firebaseKey).then(() => onUpdate());
    }
  };

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
              <br />
              <h5 className="card-text bold">{pinObj.title}</h5>
              <h5 className="card-text bold">{pinObj.description}</h5>
              <h5 className="card-text bold">{pinObj.destinationLink}</h5>
              <div>
                <Link href={`/pin/edit/${pinObj.firebaseKey}`} passHref className="">
                  <Button variant="info" className="card-user">EDIT</Button>
                </Link>
                <Button className="card-user" variant="danger" onClick={deleteThisPin}>
                  DELETE
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

UserPinCard.propTypes = {
  pinObj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    destinationLink: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
