//import produce from 'immer';
//
//// todo reducer recebe um state que é estado inicial"aqui ê um array vazio" e recebe tambem uma action que dira o que deve ser feito
//export default function basket(state = [], action) {
//  // aqui ficará ouvindo a action
//  switch (action.type) {
//    // caso a action disparada "dispatch" for igual a:
//    case '@basket/ADD_SUCCESS':
//      return produce(state, draft => {
//        const { service } = action;
//        draft.push(service);
//      });
//    case '@basket/REMOVE':
//      return produce(state, draft => {
//        const serviceIndex = draft.findIndex(p => p.id === action.id);
//
//        if (serviceIndex >= 0) {
//          draft.splice(serviceIndex, 1);
//        }
//      });
//    // Estado default caso nao tenha acontecido NADA
//    default:
//      return state;
//  }
//}
//
