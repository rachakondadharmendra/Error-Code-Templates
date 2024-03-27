import React from 'react';
import './DirectIPNotAllowed.css';

function DirectIPNotAllowed() {
  const currentTime = new Date().toLocaleString();
  const reportMessage = "Warning: Your IP has been reported to the administrator.";

  return (
    <div className="full-screen-container">
      <div className="error-container">
        <header>
          <h1>
            <span className="error-code">Error 403</span>
            <span className="error-message">Forbidden: Direct IP Access</span>
          </h1>
        </header>
        <section>
          <div className="section-content">
            <h3>What Happened?</h3>
            <p>You've attempted to access this website via direct IP address, which is forbidden for security reasons.</p>
          </div>
          <div className="section-content">
            <h3>What Can I Do?</h3>
            <p>Please use the correct domain name in your web browser to access this website.</p>
          </div>
        </section>
        <footer>
          <div className="section-content">
            <p>Current Time: {currentTime}</p>
            <p className="warning-message">{reportMessage}</p> {/* Warning message */}
            <p className="footer-text">Performance &amp; security by <a href="https://rachakondadharmendra.info">rachakondadharmendra.info</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DirectIPNotAllowed;
