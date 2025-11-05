import React from 'react';

const BtcIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#F7931A"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.203 15.864V17.07H7V6.929h1.203v1.895h.02c.321-.599.71-1.077 1.168-1.434a4.01 4.01 0 011.696-.653c.631-.11 1.282-.099 1.913.03l-.28 1.182c-.54-.11-1.09-.13-1.63-.06a2.822 2.822 0 00-2.31 1.28c-.39.46-.66.99-.81 1.57h3.768v1.192H9.97v2.85h3.42v1.191H9.97v1.896H8.204zM9.97 10.016v1.98h2.09c.07-.66.02-1.33-.21-1.98H9.97z" fill="white"/>
  </svg>
);

export default BtcIcon;
