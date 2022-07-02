import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import ItemModal from '../components/ItemModal';
import OffCanvas from '../components/OffCanvas';

import { client } from '../lib/client';

const CartContext = createContext({} as CartContextTypes);
const query =
  '*[_type == "product"] {image, name, slug, price, id, description}';

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
  handleModalShow: () => void;
  handleModalClose: () => void;
  dataModal: (name: string, description: string) => void;
  cart: CartItem[];
  itemData: DataItem[];
  itemQty: number;
  isModalOpen: boolean;
  isModalData: any;
  isModalDescription: any;
};

type DataItem = {
  image: string;
  name: string;
  price: number;
  id: number;
  description: string;
};

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemData, setItemData] = useState<DataItem[]>([]);
  const [isModalData, setIsModalData] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDescription, setIsModalDescription] = useState('');

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

  function dataModal(name: string, description: string) {
    setIsModalOpen(true);
    setIsModalData(name);
    setIsModalDescription(description);
  }

  const handleShow = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleModalShow = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartQty,
        increaseQty,
        decreaseQty,
        removeItem,
        handleShow,
        handleClose,
        handleModalShow,
        handleModalClose,
        dataModal,
        cart,
        itemData,
        itemQty,
        isModalOpen,
        isModalData,
        isModalDescription,
      }}
    >
      {children}

      <OffCanvas isOpen={isOpen} />

      <ItemModal />
    </CartContext.Provider>
  );
}
