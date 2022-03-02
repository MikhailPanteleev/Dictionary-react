import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
  isLoading: true,
  error: null,
  info: {},
  isError: false,
};

const HomePageReducer = handleActions(
  {
    [actions.GET_WORD_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_WORD_SUCCESS]: (state, { payload }) => ({
      ...state,
      info: payload.response,
      isLoading: false,
      isError: false,
    }),

    [actions.GET_WORD_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
      isError: true,
    }),
  },
  defaultState
);

export default HomePageReducer;
