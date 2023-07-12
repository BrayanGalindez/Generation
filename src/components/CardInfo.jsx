// import React from 'react';
import PropTypes from 'prop-types';

const CardInfo = ({ title, content }) => {
  return (
    <div className="card-info">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CardInfo;