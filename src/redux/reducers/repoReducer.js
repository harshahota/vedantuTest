import * as t from "../actionTypes";

var initialState = {
  loading: false,
  repoCount: 0,
  repos: '',
};

const setRepo = (state, payload) => {
  console.log('inside set repo reducer the payload is ', payload)
  return {
    ...state,
    repoCount: payload.length,
    repos: payload,
    loading: false
  };
}

const setLoading = (state, payload) => {
  return {
    ...state,
    loading: payload
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case t.set_repo: return setRepo(state, action.payload);
    case t.set_loading: return setLoading(state, action.payload);
    default:
      return state;
  }
}
