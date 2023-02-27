export interface AppState {
  produtos: any;
  test: any;
}

export const initialState: AppState = {
  produtos: {},
  test: {},
};

export function produtosReducer(state = initialState, action: any): AppState {
  switch (action.type) {
    case 'estoqueProdutos':
      return {
        ...state,
        produtos: action.payload.produtos,
      };
    case 'adicionarProduto':
      return {
        ...state,
        produtos: [...state.produtos, action.payload],
      };
    default:
      return state;
  }
}
