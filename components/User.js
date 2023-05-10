import { PropTypes } from 'prop-types';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function User({ userObj }) {
  return (
    <Container className="userProfile">
      <Card className="userCard">
        <Card.Img className="user-img" variant="top" src={userObj.photoURL} />
        <Card.Body className="userCard-body">
          <h4>{userObj.displayName}</h4>
          <div className="userCard-email">
            {userObj.email}
          </div>
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
