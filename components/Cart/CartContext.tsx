import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem, CartState } from "../../types/cart";

const CartStateContext = createContext<CartState | null>(null);

const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem("SHOPPING_CART");
  if (!itemsFromLocalStorage) return [];
  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const setCartItemsInStorage = (items: CartItem[]) => {
  localStorage.setItem("SHOPPING_CART", JSON.stringify(items));
};

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, []);

  useEffect(() => {
    setCartItemsInStorage(cartItems);
  }, [cartItems]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find(
              (existingItem) => existingItem.id === item.id
            );
            if (!existingItem) {
              return [...cartItems, item];
            }

            return prevState.map((existingItem) => {
              if (existingItem.id === item.id) {
                return {
                  ...existingItem,
                  count: existingItem.count + 1,
                };
              }
              return existingItem;
            });
          });
        },
        removeItemFromCart: (id) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find(
              (existingItem) => existingItem.id === id
            );
            if (existingItem && existingItem.count <= 1) {
              return prevState.filter((existingItem) => existingItem.id !== id);
            }
            return prevState.map((existingItem) => {
              if (existingItem.id === id) {
                return {
                  ...existingItem,
                  count: existingItem.count - 1,
                };
              }
              return existingItem;
            });
          });
        },
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);

  if (!cartState) {
    throw new Error("You forgot use CartStateCintextProvider!");
  }

  return cartState;
};
