import { useCartState } from "./CartContext";

export const CartContent = () => {
  const { items, removeItemFromCart } = useCartState();
  return (
    <div className="col-span-2">
      <ul className="divide-y divide-gray-200">
        {items.map(({ title, price, count, id }, idx) => (
          <li className="py-4" key={`cartItem-${idx}-${title}`}>
            <div className="flex justify-between items-center">
              <div>
                {count} x {title}
              </div>
              <div className="flex items-CartStateContextProvider">
                {price}
                <button
                  onClick={() => removeItemFromCart(id)}
                  className="ml-4 text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-label="Usuń produkt"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
