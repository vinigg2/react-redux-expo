import { all, takeLatest, put } from 'redux-saga/effects';
import { SessionTypes, SessionActions } from '../ducks/session';
import * as session from './session';

export default function* rootSaga() {
  return yield all([
    takeLatest(SessionTypes.CHECK_TOKEN_REQUEST, session.checkToken),

    put(SessionActions.checkTokenRequest()),
  ]);
}
