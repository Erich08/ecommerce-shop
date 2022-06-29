import { createContext, ReactNode, useContext, useState } from 'react';
import OffCanvas from '../components/OffCanvas';

const CartContext = createContext({} as CartContextTypes);

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type CartContextTypes = {
  cartQty: (id: number) => number;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
  handleShow: () => void;
  handleClose: () => void;
};

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function cartQty(id: number) {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQty(id: number) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQty(id: number) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === 1)) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function handleShow() {
    setIsOpen(true);
<<<<<<< HEAD
=======
    console.log('hello');
>>>>>>> main
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <CartContext.Provider
      value={{
        cartQty,
        increaseQty,
        decreaseQty,
        removeItem,
        handleShow,
        handleClose,
      }}
    >
      {children}
      <OffCanvas isOpen={isOpen} />
    </CartContext.Provider>
  );
}
