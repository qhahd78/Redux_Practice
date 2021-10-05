import * as types from './ActionTypes';

// redux action
export const addCat = () => ({
  type: types.ADD_CAT,
});

export const delCat = () => ({
  type: types.DEL_CAT,
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color,
});
