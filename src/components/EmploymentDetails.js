import React from 'react';

const EmploymentDetails = ({ status, industry, occupation, onEdit }) => (
  <div className="card mb-3">
    <div className="card-header">
      Employment Details
      <button className="btn btn-sm btn-primary float-end" onClick={onEdit}>Edit Info</button>
    </div>
    <div className="card-body">
      <p><strong>Employment Status:</strong> {status}</p>
      <p><strong>Industry:</strong> {industry}</p>
      <p><strong>Occupation:</strong> {occupation}</p>
    </div>
  </div>
);

export default EmploymentDetails;
