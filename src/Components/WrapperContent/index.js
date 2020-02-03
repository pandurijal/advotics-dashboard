import React from 'react';

const WrapperContent = props => {
  const { title, grid, children } = props;
  return (
    <div className={`wrapper-content ${grid ? grid : ''}`}>
      <p className="title">{title}</p>
      {children}
    </div>
  );
};

export { WrapperContent };
