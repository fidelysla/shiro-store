import { useStore } from '@nanostores/preact';
import { cart } from '../../store/cartStore';

export default function CartIcon() {
  // useStore se suscribe a nuestro carrito. 
  // Cualquier cambio en el localStorage o en la tienda actualizará esta variable mágicamente.
  const $cart = useStore(cart);

  // Calculamos la cantidad total de artículos sumando las cantidades de cada producto
  const totalItems = Object.values($cart).reduce(
    (acc, currentItem) => acc + currentItem.quantity,
    0
  );

  return (
    <div className="dropdown dropdown-end">
      {/* Al hacer clic aquí, más adelante abriremos el Drawer (Panel lateral) */}
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          
          {/* Si hay productos, mostramos la burbuja. Si es 0, la ocultamos para un diseño más limpio */}
          {totalItems > 0 && (
            <span className="badge badge-sm badge-primary indicator-item">
              {totalItems}
            </span>
          )}

        </div>
      </div>
    </div>
  );
}