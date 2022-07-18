export interface CartItem {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly count: number;
}

export interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
}
