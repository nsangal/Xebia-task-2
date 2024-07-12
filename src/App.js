import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import ContactDetails from './components/ContactDetails';
import HomeAddress from './components/HomeAddress';
import NationalityTaxResidence from './components/NationalityTaxResidence';
import EmploymentDetails from './components/EmploymentDetails';

const App = () => {
  const handleEdit = (section) => {
    alert(`Edit ${section}`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <PersonalInfo
            name="John"
            middleName="Doe"
            lastName="Smith"
            dob="01/01/1990"
            onEdit={() => handleEdit('Personal Info')}
          />
          <ContactDetails
            email="john@example.com"
            mobile="+1234567890"
            marketingPref="Yes"
            onEditEmail={() => handleEdit('Email')}
            onEditMarketingPref={() => handleEdit('Marketing Preference')}
          />
        </div>
        <div className="col-md-6">
          <HomeAddress
            address="123 Main St, Anytown, USA"
            onAddNewAddress={() => handleEdit('Add New Address')}
          />
          <NationalityTaxResidence
            nationality="American"
            citizenship="USA"
            taxResidence="USA"
            onEdit={() => handleEdit('Nationality & Tax Residence')}
          />
          <EmploymentDetails
            status="Employed"
            industry="Software"
            occupation="Developer"
            onEdit={() => handleEdit('Employment Details')}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
