import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile } from '../../services/profileService';
import './EntrepreneurProfile.css';

function EntrepreneurProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     setError("")
  //     const response = await getProfile(id)
  //     if (response.message) {
  //       setError(response.message)
  //       setLoading(false)
  //     }
  //     else {
  //       setError("")
  //       setProfile(response)
  //       setLoading(false);
  //     }
  //   };
  //   fetchProfile();
  // }, []);

  // if (loading) return <div className="loading">Loading...</div>;
  // if (error) return <div className="error">{error}</div>;

  return (
    <div className="entrepreneur-profile">
      <h1>Azlan's Profile</h1>
      <div className="profile-card">
        <h2>Bio</h2>
        <p>Some bio</p>

        <h2>Startup</h2>
        <p>Some startup</p>

        <h2>Pitch Summary</h2>
        <p>Some summary</p>

        <h2>Funding Need</h2>
        <p>
          {/* {profile.profile?.fundingNeed
            ? `$${profile.profile.fundingNeed.toLocaleString()}`
            : 'Not specified'} */}
            Some need
        </p>

        <h2>Pitch Deck</h2>
        <div className="pitch-deck-placeholder">
          <span>[Pitch Deck Placeholder]</span>
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurProfile;