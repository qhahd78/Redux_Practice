import React from 'react';
import PropTypes from 'prop-types';

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <div>{number}</div>
      <button onClick={onIncrease} type="button">
        추가
      </button>
      <button onClick={onDecrease} type="button">
        감소
      </button>
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

Counter.defaultProps = {
  number: 0,
  onIncrease: () => {},
  onDecrease: () => {},
};
export default Counter;
