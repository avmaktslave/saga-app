import { put, call, takeEvery } from 'redux-saga/effects';
import { mapUsers, failedReq } from '../actions';
import { getUsersList } from '../actions/actionsType';

const apiWrapper = (...args) => fetch(...args).then(res => res.json());

function* fetchUsersAsync(action) {
  try {
    const data = yield call(
      apiWrapper,
      `https://api.github.com/users?since=${action.amount}`,
    );

    yield put(mapUsers(data));
  } catch (error) {
    yield put(failedReq());
  }
}

export function* watchFetchUsers() {
  yield takeEvery(getUsersList, fetchUsersAsync);
}
