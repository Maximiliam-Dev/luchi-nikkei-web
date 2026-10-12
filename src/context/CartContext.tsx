"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import type { CartItem, MenuItem } from "@/types/menu";

const STORAGE_KEY = "amazona-cart-v1";

type CartState = {
  items: CartItem[];
  customerName: string;
  address: string;
  isOpen: boolean;
};

type CartAction =
  | {
      type: "HYDRATE";
      payload: Pick<CartState, "items" | "customerName" | "address">;
    }
  | { type: "ADD"; product: MenuItem }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; quantity: number }
  | { type: "SET_NAME"; name: string }
  | { type: "SET_ADDRESS"; address: string }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "TOGGLE" }
  | { type: "CLEAR" };

const initialState: CartState = {
  items: [],
  customerName: "",
  address: "",
  isOpen: false,
};

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload };
    case "ADD": {
      const existing = state.items.find((item) => item.id === action.product.id);
      const items = existing
        ? state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [
            ...state.items,
            {
              id: action.product.id,
              nombre: action.product.nombre,
              precio: action.product.precio,
              quantity: 1,
            },
          ];
      return { ...state, items, isOpen: true };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "SET_QTY": {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.id),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item,
        ),
      };
    }
    case "SET_NAME":
      return { ...state, customerName: action.name };
    case "SET_ADDRESS":
      return { ...state, address: action.address };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

type CartContextValue = CartState & {
  addItem: (product: MenuItem) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  setCustomerName: (name: string) => void;
  setAddress: (address: string) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  clearCart: () => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<CartState>;
        dispatch({
          type: "HYDRATE",
          payload: {
            items: Array.isArray(parsed.items) ? parsed.items : [],
            customerName: parsed.customerName ?? "",
            address: parsed.address ?? "",
          },
        });
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        items: state.items,
        customerName: state.customerName,
        address: state.address,
      }),
    );
  }, [hydrated, state.items, state.customerName, state.address]);

  const addItem = useCallback((product: MenuItem) => {
    dispatch({ type: "ADD", product });
  }, []);
  const removeItem = useCallback((id: string) => {
    dispatch({ type: "REMOVE", id });
  }, []);
  const setQuantity = useCallback((id: string, quantity: number) => {
    dispatch({ type: "SET_QTY", id, quantity });
  }, []);
  const setCustomerName = useCallback((name: string) => {
    dispatch({ type: "SET_NAME", name });
  }, []);
  const setAddress = useCallback((address: string) => {
    dispatch({ type: "SET_ADDRESS", address });
  }, []);
  const openCart = useCallback(() => dispatch({ type: "OPEN" }), []);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE" }), []);
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const count = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items],
  );
  const total = useMemo(
    () => state.items.reduce((sum, item) => sum + item.precio * item.quantity, 0),
    [state.items],
  );

  const value = useMemo(
    () => ({
      ...state,
      addItem,
      removeItem,
      setQuantity,
      setCustomerName,
      setAddress,
      openCart,
      closeCart,
      toggleCart,
      clearCart,
      count,
      total,
    }),
    [
      state,
      addItem,
      removeItem,
      setQuantity,
      setCustomerName,
      setAddress,
      openCart,
      closeCart,
      toggleCart,
      clearCart,
      count,
      total,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
}
