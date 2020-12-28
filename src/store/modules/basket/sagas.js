//import { call, put, all, takeLatest, select } from 'redux-saga/effects';
//import { toast } from 'react-toastify';
//import api from '../../../services/api';
//import history from '../../../services/history';
//import { formatPrice } from '../../../util/format';
//import { addToBasketSuccess, updateAmountSuccess } from './actions';
//// o uso do * ao lado da function chama-se generator, e basicamente é o mesmo que usar o async, na verdade o async await é convertido pelo babel para generators " function* "
//// um generator pode ser um pouco mais robusto, o add to basket fara uma chamada api
//function* addToBasket({ id }) {
//  // verificar produdo na cesta evita o duplicado
//  // o select é responsavel por buscar informacoes no state
//  const serviceExists = yield select(state =>
//    state.basket.find(p => p.id === id)
//  );
//  // quantidade de service para a cesta
//  const serviceAmount = 1;
//  // quantidade na basket
//  const currentAmount = serviceExists ? serviceExists.amount : 0;
//  // nova quantidade adcionada na basket
//  const amount = currentAmount + 1;
//  // se no basket for maior que a quantidade permitida
//  if (amount > serviceAmount) {
//    toast.error('Limite exedido');
//    return;
//  }
//  if (serviceExists) {
//    yield put(updateAmountSuccess(id, amount));
//  } else {
//    // o yield e o call seria o mesmo que "await api.get('....')"
//    const response = yield call(api.get, `/service/${id}`);
//    // array alterado
//    const data = {
//      ...response.data,
//      amount: 1,
//      priceFormatted: formatPrice(response.data.price),
//    };
//    // dispara action do redux
//    yield put(addToBasketSuccess(data));
//    // redireciona
//    history.push('/basket');
//  }
//}
//
//function* updateAmount({ id, amount }) {
//  // se o user tentar diminuir a quantidade abaixo ou a 0
//  if (amount <= 0) return;
//
//  const stock = yield call(api.get, `/stock/${id}`);
//  const stockAmount = stock.data.amount;
//
//  if (amount > stockAmount) {
//    toast.error('Limite exedido');
//    return;
//  }
//  yield put(updateAmountSuccess(id, amount));
//}
//
//export default all([
//  // -> chama uma vez no "click do usuario"
//  takeLatest('@basket/ADD_REQUEST', addToBasket),
//  takeLatest('@basket/UPDATE_AMOUNT_REQUEST', updateAmount),
//]);
//
