import React from 'react';

const NationalityTaxResidence = ({ nationality, citizenship, taxResidence, onEdit }) => (
  <div className="card mb-3">
    <div className="card-header">
      Nationality & Tax Residence
      <button className="btn btn-sm btn-primary float-end" onClick={onEdit}>Edit Info</button>
    </div>
    <div className="card-body">
      <p><strong>Nationality:</strong> {nationality}</p>
      <p><strong>Citizenship:</strong> {citizenship}</p>
      <p><strong>Tax Residency:</strong> {taxResidence}</p>
    </div>
  </div>
);

export default NationalityTaxResidence;
