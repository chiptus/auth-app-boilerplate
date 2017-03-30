import React from 'react';
import './content-container.css';

const ContentContainer = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default ContentContainer;
