import { put, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import api from '../../helpers/api';
import { SessionActions } from '../ducks/session';
import config from '../../config';

export function* checkToken() {
    try {
        let token = yield call([AsyncStorage, 'getItem'], config.storage.TOKEN_KEY);
        if (!token) {
            return yield put(SessionActions.checkTokenFailure());
        }

        let response = yield call(api.get, 'api/users/me', {
            headers: { Authorization: `Bearer ${token}` },
        });
        let user = response.data.item;

        yield put(
            SessionActions.createSession(token, {
                id: user._id
            }),
        );
        yield put(SessionActions.checkTokenSuccess());
    } catch (err) {
        yield put(SessionActions.checkTokenFailure());
    }
}
