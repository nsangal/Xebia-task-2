import React from 'react';

const PersonalInfo = ({ name, middleName, lastName, dob, onEdit }) => (
  <div className="card mb-3">
    <div className="card-header">
      Personal Info
      <button className="btn btn-sm btn-primary float-end" onClick={onEdit}>Edit Info</button>
    </div>
    <div className="card-body">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Middle Name:</strong> {middleName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Date of Birth:</strong> {dob}</p>
    </div>
  </div>
);

export default PersonalInfo;
