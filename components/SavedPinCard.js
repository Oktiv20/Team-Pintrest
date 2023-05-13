import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
import { deleteUserPin } from '../api/userpinsData';

export default function SavedPinCard({ pinObj, onUpdate }) {
  const deleteThisPin = () => {
    if (window.confirm(`Delete ${pinObj.title}?`)) {
      deleteUserPin(pinObj.firebaseKey).then(() => onUpdate());
      console.warn(pinObj);
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
              <Button className="card-unsave" variant="danger" onClick={deleteThisPin}>
                Unsave
              </Button>
              <br />
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

SavedPinCard.propTypes = {
  pinObj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    destinationLink: PropTypes.string,
    firebaseKey: PropTypes.string,
    pin_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
