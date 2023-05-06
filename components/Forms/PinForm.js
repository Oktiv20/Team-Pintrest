import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createUserPin, updateUserPin } from '../../api/userpinsData';

const initialState = {
  title: '',
  description: '',
  image: '',
  destinationLink: '',
};

function PinForm({ pinObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (pinObj.firebaseKey) setFormInput(pinObj);
  }, [pinObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pinObj.firebaseKey) {
      updateUserPin(formInput)
        .then(() => router.push(`/pin/${pinObj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createUserPin(payload).then(() => {
        router.push('/userPin');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{pinObj.firebaseKey ? 'Update' : 'Create'} Pin</h2>

      {/* PIN TITLE */}
      <FloatingLabel controlId="floatingInput1" label="Pin Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Pin Title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Pin Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* DESCRIPTION */}
      <FloatingLabel controlId="floatingInput3" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Pin Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* DESTINATION LINK */}
      <FloatingLabel controlId="floatingInput4" label="Destination Link" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Destination Link"
          name="destinationLink"
          value={formInput.destinationLink}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{pinObj.firebaseKey ? 'Update' : 'Create'} Pin</Button>
    </Form>
  );
}

PinForm.propTypes = {
  pinObj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    destinationLink: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

PinForm.defaultProps = {
  pinObj: initialState,
};

export default PinForm;
