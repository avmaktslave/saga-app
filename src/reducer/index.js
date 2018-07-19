import {
  getUsersList,
  successRequest,
  failedRequest,
} from '../actions/actionsType';

const InitialState = {
  get: {},
  users: [],
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case getUsersList:
      return {
        get: {
          amount: action.amount,
        },
        users: [],
      };
    case successRequest:
      return {
        ...state,
        users: action.data,
      };
    case failedRequest:
      return 'Failed Request';
    default:
      return state;
  }
};

export default reducer;
