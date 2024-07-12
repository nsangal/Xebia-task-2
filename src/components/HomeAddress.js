import React from 'react';

const HomeAddress = ({ address, onAddNewAddress }) => (
  <div className="card mb-3">
    <div className="card-header">
      Home Address
      <button className="btn btn-sm btn-primary float-end" onClick={onAddNewAddress}>Add New Address</button>
    </div>
    <div className="card-body">
      <p><strong>Current Address:</strong> {address}</p>
    </div>
  </div>
);

export default HomeAddress;
