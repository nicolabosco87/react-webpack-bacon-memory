import { fork } from 'redux-saga/effects';
import { watchRefreshChat } from './sagaChat';

// single entry point to start all Sagas at once
export default function * rootSaga() {
  yield [
    watchRefreshChat()
  ];
}