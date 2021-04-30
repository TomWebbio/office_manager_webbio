import { createContext } from 'react';
import IItem from '../interfaces/item';

export const initialCartState: ICartState = {
  items: [],
};

export interface ICartActions {
  type: 'add_item' | 'remove_item';
  payload: IItem;
}

export interface ICartState {
  items: IItem[];
}

export const cartReducer = (state: ICartState, action: ICartActions) => {
  let item = action.payload;

  switch (action.type) {
    case 'add_item':
      if (!state.items.find((itm) => itm.name === item.name)) {
        return { ...state, items: [...state.items, item] };
      }

      return { ...state };
    case 'remove_item':
      const items = state.items.filter((itm) => itm.name !== item.name);

      return { ...state, items };
    default:
      return state;
  }
};

export interface ICartContextProps {
  cartState: ICartState;
  cartDispatch: React.Dispatch<ICartActions>;
}

const CartContext = createContext<ICartContextProps>({
  cartState: initialCartState,
  cartDispatch: () => {},
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;
export default CartContext;
