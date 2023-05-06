import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteUserPin } from '../api/userpinsData';

export default function PinCard({ pinObj, onUpdate }) {
  const deleteThisPin = () => {
    if (window.confirm(`Delete ${pinObj.description}?`)) {
      deleteUserPin(pinObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card style={{
        width: '18rem', margin: '10px', backgroundColor: 'white', color: 'black', textAlign: 'text-center',
      }}
      >
        <Card.Body>
          <h5 className="card-text bold">{pinObj.title}</h5>
          <Card.Img variant="top" src={pinObj.image} alt={pinObj.image} style={{ height: '400px' }} />
          <br />
          <h5 className="card-text bold">{pinObj.description}</h5>
          <h5 className="card-text">{pinObj.destinationLink}</h5>
          <Link href={`/pin/edit/${pinObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisPin} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
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
