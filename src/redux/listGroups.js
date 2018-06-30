import { createActions, createReducer } from 'reduxsauce';
import progressTypes from 'constants/progressTypes';
import { LIST_OF_GROUPS } from 'constants/devMeta';


/* -------------  Action Creators ------------- */
const { Creators } = createActions({
  getGroups: [],
  getGroupsSuccess: ['listGroups'],
  getGroupsError: null,
});

export default Creators;

/* ------------- Types  ------------- */
export const Types = {
  GET_GROUPS: 'GET_GROUPS',
  GET_GROUPS_SUCCESS: 'GET_GROUPS_SUCCESS',
  GET_GROUPS_ERROR: 'GET_GROUPS_ERROR',
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  listGroups: [],
  progress: progressTypes.IDLE,
};

/* ------------- Reducers ------------- */
export const getGroups = (state) => ({
  ...state,
  listGroups: LIST_OF_GROUPS,
  progress: progressTypes.LOAD,
});
export const getGroupsSuccess = (state, { listGroups }) => ({
  ...state,
  listGroups,
  progress: progressTypes.SUCCESS,
});
export const getGroupsError = (state) => ({
  ...state,
  listGroups: [],
  progress: progressTypes.ERROR,
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_GROUPS]: getGroups,
  [Types.GET_GROUPS_SUCCESS]: getGroupsSuccess,
  [Types.GET_GROUPS_ERROR]: getGroupsError,
});

/* ------------- Selectors ------------- */
export const getGroups = (state) => state.progress;
