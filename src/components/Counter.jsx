import React from 'react';
import PropTypes from 'prop-types';

function Counter({ onIncrement, onDecrement, number }) {
  return (
    <div>
      <div>{number}</div>
      <button onClick={onIncrement} type="button">
        추가
      </button>
      <button onClick={onDecrement} type="button">
        감소
      </button>
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

Counter.defaultProps = {
  number: 0,
  onIncrement: () => console.log('onIncrement not defined'),
  onDecrement: () => console.log('onDecrement not defined'),
};
export default Counter;
