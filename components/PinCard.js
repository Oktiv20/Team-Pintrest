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
