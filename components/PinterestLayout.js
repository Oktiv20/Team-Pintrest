import React from 'react';
import Pin from './PinCard';

const styles = {
  pin_containter: {
    margin: 0,
    padding: 0,
    width: '80vw',
    background: 'black',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'gird',
    gridTemplateColumn: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',

  },
};

function PinterestLayout() {
  return (
    <div style={styles.pin_containter}>
      <>
        <Pin />
      </>
    </div>
  );
}

export default PinterestLayout;
