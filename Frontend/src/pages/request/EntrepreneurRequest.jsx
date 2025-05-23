import React from 'react';
import './EntrepreneurRequest.css';

export default function EntrepreneurRequest() {
  return (
    <div className="entrepreneur-request-container">
      <header className="request-header">
        <h1>Collaboration Requests</h1>
        <p>Review and respond to investment proposals from investors.</p>
      </header>

      <section className="requests-section">
        <h2>Incoming Requests</h2>
        <div className="request-list">
          <div className="request-card">
            <div className="request-header-card">
              <h3>Investor: Alice Brown</h3>
              <span className="request-status pending">Pending</span>
            </div>
            <p className="request-details">Amount: $75,000 | Equity: 12%</p>
            <p className="request-message">
              Your startup's vision aligns with our investment goals. Proposing a $75k investment for 12% equity.
            </p>
            <div className="request-actions">
              <button className="action-button accept">Accept</button>
              <button className="action-button reject">Reject</button>
            </div>
          </div>
          <div className="request-card">
            <div className="request-header-card">
              <h3>Investor: Bob Wilson</h3>
              <span className="request-status accepted">Accepted</span>
            </div>
            <p className="request-details">Amount: $120,000 | Equity: 18%</p>
            <p className="request-message">
              Excited to support your growth. Offering $120k for 18% equity with strategic guidance.
            </p>
            <div className="request-actions">
              <button className="action-button view">View Details</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}