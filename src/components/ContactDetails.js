import React from 'react';

const ContactDetails = ({ email, mobile, marketingPref, onEditEmail, onEditMarketingPref }) => (
  <div className="card mb-3">
    <div className="card-header">
      Contact Details
    </div>
    <div className="card-body">
      <p><strong>Email Address:</strong> {email} <button className="btn btn-sm btn-primary ms-2" onClick={onEditEmail}>Edit</button></p>
      <p><strong>Mobile Number:</strong> {mobile}</p>
      <p><strong>Marketing Preference:</strong> {marketingPref} <button className="btn btn-sm btn-primary ms-2" onClick={onEditMarketingPref}>Edit</button></p>
    </div>
  </div>
);

export default ContactDetails;
