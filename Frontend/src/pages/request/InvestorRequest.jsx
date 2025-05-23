
import './InvestorRequest.css';

export default function InvestorRequest() {
  return (
    <div className="investor-request-container">
      <header className="request-header">
        <h1>Investor Collaboration Requests</h1>
       
      </header>

      

      <section className="sent-requests-section">
        <h2>Sent Requests</h2>
        <div className="request-list">
          <div className="request-card">
            <h3>Entrepreneur: Jane Doe</h3>
            <p className="request-details">Amount: $50,000 | Equity: 10%</p>
            <p className="request-message">
              Interested in your innovative startup. Let's discuss further.
            </p>
            <span className="request-status pending">Pending</span>
          </div>
          <div className="request-card">
            <h3>Entrepreneur: John Smith</h3>
            <p className="request-details">Amount: $100,000 | Equity: 15%</p>
            <p className="request-message">
              Excited about your tech solution. Proposing a strategic partnership.
            </p>
            <span className="request-status accepted">Accepted</span>
          </div>
        </div>
      </section>
    </div>
  );
}