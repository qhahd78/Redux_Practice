import * as types from '../action/ActionTypes';

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CAT:
      return {
        // 기존 state 를 덮어서 새로운 객체 생성하여 반환.
        // 직접 state 수정은 불가능 .
        ...state,
        number: state.number + 1,
      };
    case types.DEL_CAT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
