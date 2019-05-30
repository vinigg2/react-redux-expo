import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
    checkTokenRequest: null,
    checkTokenSuccess: null,
    checkTokenFailure: null,

    createSession: ['token', 'user'],

    setUserType: ['userType'],

    updateUserFeeling: ['feeling'],
});

export const SessionTypes = Types;
export const SessionActions = Creators;

const INITIAL_STATE = {
    loading: true,
    isSigned: false,
    token: '',
    user: {
        id: ''
    },
};

const checkTokenRequest = state => ({
    ...state,
    loading: true,
});

const checkTokenSuccess = state => ({
    ...state,
    loading: false,
});

const checkTokenFailure = state => ({
    ...state,
    loading: false,
});

const createSession = (state, { token, user }) => ({
    ...state,
    token,
    isSigned: true,
    user: {
        ...state.user,
        id: user.id,
        mac: user.mac,
        city: user.city,
        state: user.state,
        country: user.country,
        feeling: user.feeling,
    },
});

const setUserType = (state, { userType }) => ({
    ...state,
    user: {
        ...state.user,
        type: userType,
    },
});

const updateUserFeeling = (state, { feeling }) => ({
    ...state,
    user: {
        ...state.user,
        feeling: {
            name: feeling.name,
            image: feeling.image,
        },
    },
});

export default createReducer(INITIAL_STATE, {
    [Types.CHECK_TOKEN_REQUEST]: checkTokenRequest,
    [Types.CHECK_TOKEN_SUCCESS]: checkTokenSuccess,
    [Types.CHECK_TOKEN_FAILURE]: checkTokenFailure,

    [Types.CREATE_SESSION]: createSession,

    [Types.SET_USER_TYPE]: setUserType,

    [Types.UPDATE_USER_FEELING]: updateUserFeeling,
});
