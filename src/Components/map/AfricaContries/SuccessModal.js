import React from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../../APIs/Config';
import './SuccessModal.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentScore } from '../../../../src/store/slices/score';

function SuccessModal({ show, onClose, score }) {
  const currentUser = useSelector(state => state.currentUser.currentUser);
  console.log(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHomeClick = async () => {
    dispatch(setCurrentScore(score));
    onClose();
    navigate('/');
  }

  // const handleHomeClick = async () => {
  //   const token = currentUser ? currentUser.token : null;
  //   console.log(token);
  //   if (!token) {
  //     console.error('Authentication token not found or invalid.');
  //     return;
  //   } else {
  //     try {
  //       dispatch(setCurrentScore(score));
  //       const requestData = {
  //         lastScore: score,
  //         time: new Date().toISOString(),
  //         status: 'done',
  //         numOfAttempt: 2
  //       }
  //       const response = await axiosInstance.post("/Scores", requestData, {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //       console.log('Score posted successfully:', response.data);
  //       onClose();
  //       navigate('/');
  //     } catch (error) {
  //       console.error('Error posting score:', error.response);
  //     }
  //   }
  // };

  const formatDate = () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };
    return new Date().toLocaleDateString('en-US', options);
  };
  const formattedDate = formatDate();
  return (
    <Modal show={show} onHide={onClose} centered animation size='lg'>
      <Modal.Body className="d-flex flex-column align-items-center">
        <CloseButton onClick={onClose} className="position-absolute top-0 end-0 m-3" />

        <FontAwesomeIcon
          className='mt-3'
          icon={faCircleCheck}
          style={{ color: '#157347' }}
          size="3x"
        />
        <h2 className='mt-3'>Well done! You Completed The Game</h2>

        <div className="scoreContainer">
          <FontAwesomeIcon className='starIcon' icon={faStar} bounce size="3x" style={{ color: "#FFD43B" }} />
          <h5 className='score'>Score: {score}</h5>
        </div>
        <h5>Game: Africa countries</h5>
        <h5>Date: {formattedDate}</h5>

      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button className='mb-3' variant="outline-success" onClick={handleHomeClick}> Home</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default SuccessModal;