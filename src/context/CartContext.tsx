import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import OffCanvas from '../components/OffCanvas';
import { client } from '../lib/client';

const CartContext = createContext({} as CartContextTypes);
const query = '*[_type == "product"] {image, name, slug, price, id}';

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
  cart: CartItem[];
  itemData: DataItem[];
  itemQty: number;
};

type DataItem = {
  image: string;
  name: string;
  price: number;
  id: number;
};

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemData, setItemData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(query);
      setItemData(data);
    };
    fetchData();
  }, []);

  const itemQty = cart.reduce((qty, item) => item.quantity + qty, 0);

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
          if (item.id === id && item.quantity > 0) {
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
        cart,
        itemData,
        itemQty,
      }}
    >
      {children}
      <OffCanvas isOpen={isOpen} />
    </CartContext.Provider>
  );
}
