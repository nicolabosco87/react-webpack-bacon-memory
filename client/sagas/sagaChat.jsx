import { call, put, take, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { fetchMessages } from '../api/api-chat';

export function* refreshChat() {
  try {
    const messages = yield call(fetchMessages);
    yield put({ type: 'MESSAGES_RECEIVED', messages });
  } catch (error) {
     yield put({type: 'LOAD_IMAGES_FAILURE', error});
  }
}

export function* watchRefreshChat() {
  while (true) {
    const action = yield take('REFRESH_CHAT');
    yield fork(refreshChat);
  }
}

