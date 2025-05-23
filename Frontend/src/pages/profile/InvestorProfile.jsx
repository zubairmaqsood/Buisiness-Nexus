import React from 'react';
import './InvestorProfile.css';
import { useParams } from 'react-router';

export default function InvestorProfile() {
  const {id} = useParams()

  const submitProfile =async (userData)=>{
    const response = await updateProfile(id,userData)
    // if(response===200)
  }

  return (
    <div className="investor-profile-container">
  

      <div className="profile-content">
        <div className="profile-display">
          <h2>Profile Information</h2>
          <div className="profile-field">
            <label>Name</label>
            <p className="profile-value">John Smith</p>
          </div>
          <div className="profile-field">
            <label>Email</label>
            <p className="profile-value">john.smith@example.com</p>
          </div>
          <div className="profile-field">
            <label>Bio</label>
            <p className="profile-value">
              Experienced investor in tech and healthcare startups.
            </p>
          </div>
          <div className="profile-field">
            <label>Investment Interests</label>
            <div className="interests-list">
              <span className="interest-tag">Technology</span>
              <span className="interest-tag">Healthcare</span>
              <span className="interest-tag">Fintech</span>
            </div>
          </div>
          <div className="profile-field">
            <label>Portfolio Companies</label>
            <div className="portfolio-list">
              <div className="portfolio-item">
                <h3>TechTrend Innovations</h3>
                <p className="portfolio-description">
                  AI-driven analytics platform for retail.
                </p>
              </div>
              <div className="portfolio-item">
                <h3>HealthSync Solutions</h3>
                <p className="portfolio-description">
                  Telemedicine platform for patients and doctors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-edit">
          <h2>Edit Profile</h2>
          <form className="edit-form" onSubmit={submitProfile}>
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                className="form-textarea"
                placeholder="Enter your bio (max 500 characters)"
                rows="4"
              />
            </div>
            <div className="form-group">
              <label htmlFor="investment-interests">Investment Interests</label>
              <input
                type="text"
                id="investment-interests"
                className="form-input"
                placeholder="Enter interests (comma-separated, e.g., tech, healthcare)"
              />
            </div>
            <div className="form-group">
              <label>Portfolio Companies</label>
              <div className="portfolio-input-group">
                <input
                  type="text"
                  placeholder="Company name"
                  className="form-input"
                />
                <textarea
                  placeholder="Company description"
                  className="form-textarea"
                  rows="3"
                />
              </div>
            </div>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 