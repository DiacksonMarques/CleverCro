import { all } from 'redux-saga/effects';
import basket from './basket/sagas';

export default function* rootSaga() {
  return yield all([basket]);
}
