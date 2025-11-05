import React from 'react';

const BnbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#F3BA2F"/>
    <path d="M12 5.25l-4.125 4.125L12 13.5l4.125-4.125L12 5.25zM7.875 12l-2.625 2.625L7.875 17.25l2.625-2.625L7.875 12zm8.25 0l-2.625 2.625L16.125 17.25l2.625-2.625-2.625-2.625zM12 14.625l-2.625 2.625L12 19.875l2.625-2.625L12 14.625z" fill="#fff"/>
  </svg>
);

export default BnbIcon;
