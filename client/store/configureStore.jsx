import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/reducers';
import rootSaga from '../sagas/root';

export function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware)); //(rootSaga)

  sagaMiddleware.run(rootSaga);

  /*if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () => {
      const nextReducer = require('../reducers/reducers');
      store.replaceReducer(nextReducer);
    });
  }*/

  // store.subscribe(() => {
    // console.log("store_0 has been updated. Last action:" + store.getState().lastAction);
  // });

  return store;
}