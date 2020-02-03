import React from 'react';

const ProductCard = props => {
  const { name, image, price, sold, top } = props;
  return (
    <div className={`product-card ${top ? 'top' : ''}`}>
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={name} />
      </div>
      <div className="content">
        <p className="name">
          {name.length >= 13 ? `${name.slice(0, 13)}...` : name}
        </p>
        <div className="info">
          <p>Rp. {price}</p>
          <p>{sold}</p>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
