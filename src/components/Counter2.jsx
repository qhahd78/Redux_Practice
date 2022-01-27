import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter2 = ({ number2, onIncrease2 }) => {
  const [num, setNum] = useState(0);
  const onChange = e => {
    setNum(e.target.value);
  };

  return (
    <div>
      <h1>22</h1>
      <div>
        <button type="button" onClick={() => onIncrease2(num)}>
          +
        </button>
        <input type="text" onChange={onChange} value={num} />
        <p>숫자</p>
        {number2}
      </div>
    </div>
  );
};

Counter2.propTypes = {
  number2: PropTypes.number,
  onIncrease2: PropTypes.func,
};

Counter2.defaultProps = {
  number2: 0,
  onIncrease2: () => {},
};

export default Counter2;
