import React from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import './SuccessModal.css'
import { useNavigate } from 'react-router-dom';

function LoginModal({ show, onClose }) {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    onClose(); // Close the modal
    navigate('/login'); // Navigate to login page
  };

  return (
    <Modal show={show} onHide={onClose} centered animation size='lg'>
      <Modal.Header closeButton> {/* Use closeButton for Bootstrap styling */}
      <FontAwesomeIcon icon={faCircleExclamation} style={{ color: '#E72929' }}
          size="2x"/> &nbsp;&nbsp;
        <Modal.Title>Login Required</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <h2 className='mt-3'>You need to be logged in to play</h2>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button className='mb-3' variant="outline-success" onClick={handleLoginClick}>Login</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default LoginModal;