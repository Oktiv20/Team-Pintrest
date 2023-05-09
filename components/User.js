import { PropTypes } from 'prop-types';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function User({ userObj }) {
  return (
    <Container className="userProfile">
      <Card className="userCard">
        <Card.Img variant="top" src={userObj.photoURL} />
        <Card.Body>
          <Card.Title>{userObj.displayName}</Card.Title>
          <Card.Text>
            {userObj.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

User.propTypes = {
  userObj: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
  }),
}.isRequired;
