import React from 'react';

const EthIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#627EEA"/>
    <path d="M12 3.5v7.21l4.47 2.62L12 3.5z" fill="#C0CBF5"/>
    <path d="M12 10.71L7.53 13.33l4.47 7.17V10.71z" fill="#fff"/>
    <path d="M12 10.71v9.79l4.47-7.17L12 10.71z" fill="#C0CBF5"/>
    <path d="M12 9.61L7.53 12.23l4.47 2.62v-5.24z" fill="#C0CBF5"/>
    <path d="M16.47 12.23L12 9.61v5.24l4.47-2.62z" fill="#fff"/>
  </svg>
);

export default EthIcon;
