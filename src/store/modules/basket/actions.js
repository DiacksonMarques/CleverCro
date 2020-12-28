// -> 1º request do saga, envia o id e no saga fara uma chamada api passando o id e trazendo o objeto completo de service
//export function addToBasketRequest(id) {
//  return {
//    type: '@baske/ADD_REQUEST',
//    id,
//  };
//}
//// -> 2º request do reducer, envia para ele o array completo que veio da chamada a api
//export function addToBasketSuccess(service) {
//  return {
//    type: '@baske/ADD_SUCCESS',
//    service,
//  };
//}
//
//export function removeFromBasket(id) {
//  return {
//    type: '@baske/REMOVE',
//    id,
//  };
//}
//
//export function updateAmountRequest(id, amount) {
//  return {
//    type: '@baske/UPDATE_AMOUNT_REQUEST',
//    id,
//    amount,
//  };
//}
//
//export function updateAmountSuccess(id, amount) {
//  return {
//    type: '@baske/UPDATE_AMOUNT_SUCCESS',
//    id,
//    amount,
//  };
//}
//
