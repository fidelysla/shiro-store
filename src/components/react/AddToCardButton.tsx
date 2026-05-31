import { addCartItem } from '../../store/cartStore';

// Definimos qué datos necesita este botón para funcionar
interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function AddToCartButton({ id, name, price, image }: Props) {
  
  // Esta función se ejecuta al hacer clic
  const handleAddToCart = () => {
    addCartItem({ id, name, price, image });
    // Aquí podríamos añadir un pequeño "toast" (notificación) en el futuro,
    // pero por ahora, el numerito del menú se actualizará solo.
  };

  return (
    // btn y btn-primary son clases de DaisyUI
    // w-full hace que el botón ocupe todo el ancho de la tarjeta
    <button 
      onClick={handleAddToCart}
      className="btn btn-primary w-full"
    >
      Añadir al Carrito
    </button>
  );
}