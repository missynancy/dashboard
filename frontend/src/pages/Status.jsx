import React from 'react';
import './StatusButton.css';

const Status = ({ status }) => {
  let className = '';
  switch (status) {
    case 'Active':
      className = 'status-active';
      break;
    case 'Probation':
      className = 'status-probation';
      break;
    case 'Onboarding':
      className = 'status-onboarding';
      break;
    case 'On Leave':
      className = 'status-on-leave';
      break;
    default:
      break;
  }

  return (
    <button className={`status-button ${className}`}>
      {status}
    </button>
  );
};

export default Status;
