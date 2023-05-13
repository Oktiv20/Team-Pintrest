import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
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
        .then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createUserPin(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Container className="create-form">
      <div className="form">
        <div className="select-size abs flex">
          <Form className="form-submit" onSubmit={handleSubmit}>
            <Button className="pinSelect" variant="">Search</Button>
            <Button className="submitBtn" type="submit">{pinObj.firebaseKey ? 'Update' : 'Create'}</Button>
          </Form>
        </div>
        <div className="media">
          <div className="photo">
            <div className="trigger abs" title="No File Chosen">
              <div className="abs triggerBtn">
                <input type="file" className="upload-file" />
              </div>
            </div>
            <div className="note">We recommend using high-quality .jpg files less than 20MB</div>
          </div>
          <Button type="submit" className="saveBtn">Save from site</Button>
        </div>
      </div>
      <Container className="input-section">
        <div className="right-side">
          <Form className="form-section">

            {/* PIN TITLE */}
            <FloatingLabel controlId="floatingInput1" label="Add your title" className="input title">
              <Form.Control
                type="text"
                placeholder="Add your title"
                name="title"
                value={formInput.title}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
            {/* IMAGE INPUT  */}
            <FloatingLabel controlId="floatingInput2" label="Pin Image" className="input image">
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
            <FloatingLabel controlId="floatingInput3" label="Tell everyone what your Pin is about" className="input description">
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
            <FloatingLabel controlId="floatingInput4" label="Destination Link" className="input destinationLink">
              <Form.Control
                type="text"
                placeholder="Destination Link"
                name="destinationLink"
                value={formInput.destinationLink}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Form>
        </div>
      </Container>
    </Container>
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
