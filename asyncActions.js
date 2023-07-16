const redux = require("redux");
const produce = require("immer").produce;

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsersRequested = () => {
  return {
    action: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    action: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    action: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED: {
      return produce(state, (draft) => {
        draft.loading = true;
      });
    }

    case FETCH_USERS_SUCCESS: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.users = users;
      });
    }

    case FETCH_USERS_FAILURE: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payload;
        draft.users = [];
      });
    }
    default:
      return state;
  }
};
