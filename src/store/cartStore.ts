import { persistentMap } from '@nanostores/persistent';

// 1. Definimos la estructura de un producto dentro del carrito
export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number; // A diferencia del catálogo, aquí necesitamos saber cuántos lleva
};

// 2. Creamos la "Tienda" (Store) persistente.
// Se guardará en el localStorage del navegador bajo el nombre 'carrito_mitienda'
export const cart = persistentMap<Record<string, CartItem>>(
  'carrito_mitienda',
  {}, // Estado inicial: un carrito vacío
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

// 3. ACCIÓN: Función para añadir un producto al carrito
export function addCartItem(item: Omit<CartItem, 'quantity'>) {
  const currentCart = cart.get();
  const existingItem = currentCart[item.id];

  if (existingItem) {
    // Si el producto ya está en el carrito, le sumamos 1 a la cantidad
    cart.setKey(item.id, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  } else {
    // Si es un producto nuevo, lo añadimos con cantidad 1
    cart.setKey(item.id, {
      ...item,
      quantity: 1,
    });
  }
}

// 4. ACCIÓN: Función para eliminar un producto completamente
export function removeCartItem(id: string) {
  const currentCart = cart.get();
  delete currentCart[id];
  cart.set(currentCart); // Actualizamos el estado sin ese producto
}

// 5. ACCIÓN: Función para restar cantidad (ej: de 3 a 2)
export function decreaseCartItem(id: string) {
  const currentCart = cart.get();
  const existingItem = currentCart[id];

  if (existingItem && existingItem.quantity > 1) {
    cart.setKey(id, {
      ...existingItem,
      quantity: existingItem.quantity - 1,
    });
  } else {
    // Si la cantidad es 1 y lo resta, lo eliminamos
    removeCartItem(id);
  }
}