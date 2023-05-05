import React from 'react';

const styles = {
  pin: {
    margin: '15px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'red',

  },
  small: {
    gridrowEnd: 'span 26',
  },
  medium: {
    gridrowEnd: 'span 33',
  },
  large: {
    gridrowEnd: 'span 45',
  },
};

function Pin() {
  return (
    <div style={{
      ...styles.pin,
    }}
    />
  );
}

export default Pin;

// import React from "react";
// import PropTypes from "prop-types";

// const Card = ({ imageUrl, title, description }) => {
//   return (
//     <div className="card">
//       <div className="card-image">
//         <img src={imageUrl} alt={title} />
//       </div>
//       <div className="card-content">
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description">{description}</p>
//       </div>
//     </div>
//   );
// };

// Card.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default Card;
