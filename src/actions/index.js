import { getUsersList, successRequest, failedRequest } from './actionsType';

export const getUsers = amount => ({
  type: getUsersList,
  amount,
});

export const mapUsers = data => ({
  type: successRequest,
  data,
});

export const failedReq = () => ({
  type: failedRequest,
});
