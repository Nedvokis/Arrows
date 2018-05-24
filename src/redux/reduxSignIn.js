import { createActions, createReducer } from 'reduxsauce';
import progressTypes from 'constants/progressTypes';
import { LIST_OF_GROUPS } from 'constants/devMeta';


/* -------------  Action Creators ------------- */
const { Creators } = createActions({
    changeName: ['name'],
    changePassword: ['password'],
    sendSigninForm: null,
    sendSigninFormSuccess: null,
    sendSigninFormError: null,
});

export default Creators;

export const SignInActions = Types;

/* ------------- Types  ------------- */
export const Types = {
    CHANGE_NAME:'CHANGE_NAME',
    CHANGE_PASSWORD:'CHANGE_PASSWORD',
    SEND_SIGNIN_FORM:'SEND_SIGNIN_FORM',
    SEND_SIGNIN_FORM_SUCCESS:'SEND_SIGNIN_FORM_SUCCESS',
    SEND_SIGNIN_FORM_ERROR:'SEND_SIGNIN_FORM_ERROR',
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  name: '',
  password: '',
  progress:'',
};

/* ------------- Reducers ------------- */
export const changeName = (state, { name }) => ({
  ...state,
  name,
});

export const changePassword = (state, { password }) => ({
    ...state,
    password,
});

export const sendSigninForm = (state) => ({
    ...state,
    password,
});

export const sendSigninFormSuccess = (state, { password }) => ({
    ...state,
    password,
});

export const sendSigninFormError = (state, { password }) => ({
    ...state,
    password,
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_NAME]: changeName,
  [Types.CHANGE_PASSWORD]: changePassword,
  [Types.SEND_SIGNIN_FORM]: sendSigninForm,
  [Types.SEND_SIGNIN_FORM_SUCCESS]: sendSigninFormSuccess,
  [Types.SEND_SIGNIN_FORM_ERROR]: sendSigninFormError,
});

/* ------------- Selectors ------------- */
export const selectName = (state) => state.name;
export const selectPassword = (state) => state.password;
export const selectLoginProgress = (state) => state.progress;
