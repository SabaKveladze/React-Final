import React from 'react';
import './profile.css'; // Importing the profile.css file
import Header from '../../components/Header/Header';
const Profile = () => {
  // Dummy user data, replace this with actual user data
  const user = {
    name: 'Shramiani Nanula',
    email: 'nanula@shramiani.com',
    // Add more user details as needed
  };

  return (
    <div>
      <Header/>
      <div className="profile-container">
        <h1>User Profile</h1>
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user details here */}
        </div>
        <button>Edit Profile</button>
      </div>
    </div>
   
  );
};

export default Profile;
