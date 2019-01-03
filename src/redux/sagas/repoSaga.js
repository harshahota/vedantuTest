import { all, put, takeEvery, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as t from '../actionTypes';
import { loadRepoApi } from '../apiFunctions/repoApi';

export function* loadRepo(action) {
    console.log('Inside the loadrepo saga')
    yield put({ type: t.set_loading, payload: true })
    const response = yield call(loadRepoApi, action.payload)
    yield put({ type: t.set_repo, payload: response.data })
}
export function* searchRepo(action) {
    console.log('Inside the searchrepo saga')
    yield put({ type: t.set_repo, payload: "harsha" })
}

export default function* repoSaga() {
    yield all([
        takeEvery(t.load_repo, loadRepo),
        takeEvery(t.search_repo, searchRepo),
    ])
}
