import React, { useState } from 'react';
import './user.css'; // Ensure the file path is correct
import profileImage1 from '../../assets/img/userAvatar/1.jpg'; // Sample profile images
import profileImage2 from '../../assets/img/userAvatar/2.jpg'; // Sample profile images
import profileImage3 from '../../assets/img/userAvatar/3.jpg'; // Sample profile images
import profileImage4 from '../../assets/img/userAvatar/4.jpg'; // Sample profile images
import profileImage5 from '../../assets/img/userAvatar/5.jpg'; // Sample profile images
import profileImage6 from '../../assets/img/userAvatar/6.jpg'; // Sample profile images
import profileImage7 from '../../assets/img/userAvatar/7.jpg'; // Sample profile images
import profileImage8 from '../../assets/img/userAvatar/9.jpg'; // Sample profile images
import { useSelector } from "react-redux";
import axiosInstance from '../../APIs/Config';

function User() {

    const [editMode, setEditMode] = useState(false);
    const [playerName, setPlayerName] = useState('Menna Saeed');
    const [age, setAge] = useState('24');
    const [email, setEmail] = useState('mennasaiid16@gmail.com');
    const [phone, setPhone] = useState('01013378866');
    // const [totalScore, setTotalScore] = useState(0);
    const [selectedImage, setSelectedImage] = useState(profileImage1); // Default profile image
    const [userData, setUserData] = useState(null);

    const currentUser = useSelector(state => state.currentUser.currentUser)
    console.log(currentUser);
    const currentScore = useSelector(state => state.score.currentScore);

    const token = currentUser ? currentUser.token : null;
    console.log(token);
    if (!token) {
        console.error('Authentication token not found or invalid.');
        return;
    } else {
        axiosInstance
            .get(`/Users/username/${currentUser.username}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((result) => {
                console.log(result);
                setUserData(result.data.id)
            })
            .catch((error) =>
                console.log(error)
                // setError(error.response)
            );
    }
console.log(userData)

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };


    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleImageChange = (image) => {
        setSelectedImage(image);
    };



    return (
        <div className="Appp">
            <main className="contentt">
                <div className="cardd">
                    <section className="left-sectionn">
                        <div className="photoo">
                            <img src={selectedImage} alt="Profile" />
                            {editMode && (
                                <div className="image-selectionn">
                                    <p>Choose Profile Avatar:</p>
                                    <div className="image-optionss">
                                        <img
                                            src={profileImage1}
                                            alt="Profile 1"
                                            onClick={() => handleImageChange(profileImage1)}
                                            class="option-imagee"
                                        />
                                        <img
                                            src={profileImage2}
                                            alt="Profile 2"
                                            onClick={() => handleImageChange(profileImage2)}
                                            class="option-imagee"

                                        />
                                        <img
                                            src={profileImage3}
                                            alt="Profile 3"
                                            onClick={() => handleImageChange(profileImage3)}
                                            class="option-imagee"

                                        />
                                        <img
                                            src={profileImage4}
                                            alt="Profile 4"
                                            onClick={() => handleImageChange(profileImage4)}
                                            class="option-imagee"

                                        />

                                        <img
                                            src={profileImage5}
                                            alt="Profile 5"
                                            onClick={() => handleImageChange(profileImage5)}
                                            class="option-imagee"

                                        />
                                        <img
                                            src={profileImage6}
                                            alt="Profile 6"
                                            onClick={() => handleImageChange(profileImage6)}
                                            class="option-imagee"

                                        />
                                        <img
                                            src={profileImage7}
                                            alt="Profile 7"
                                            onClick={() => handleImageChange(profileImage7)}
                                            class="option-imagee"

                                        />
                                        <img
                                            src={profileImage8}
                                            alt="Profile 8"
                                            onClick={() => handleImageChange(profileImage8)}
                                            class="option-imagee"

                                        />
                                    </div>

                                </div>
                            )}
                        </div>
                    </section>
                    <section className="right-sectionn">
                        <div className="intro-cardd">
                            {editMode ? (
                                <>

                                    <label>Age:</label>
                                    <input
                                        type="text"
                                        value={age}
                                        onChange={handleAgeChange}
                                        className="inputFieldd"

                                    />
                                    <label>Email:</label>
                                    
                                    <label>Phone:</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        className="inputFieldd"

                                    />

                                </>
                            ) : (
                                <>
                                    <p>Player: {currentUser.username}</p>
                                    <div className="personall-info">
                                        <p>Age: {age}</p>
                                        <p>id: {userData}</p>
                                        <p>Phone: {phone}</p>
                                        <p>Total Score: {currentScore}</p>
                                    </div>
                                </>
                            )}
                            <button className="buttonn" onClick={toggleEditMode}>
                                {editMode ? 'Save ' : 'Edit Profile'}
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default User;
