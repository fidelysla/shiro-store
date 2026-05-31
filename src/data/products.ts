// src/data/products.ts

// Definimos la estructura de nuestro producto (TypeScript)
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Nuestra "Base de datos" temporal
export const products: Product[] = [
  {
    id: "prod_1",
    name: "Auriculares Inalámbricos Sony",
    price: 120,
    description: "Auriculares con cancelación de ruido activa y 30 horas de batería. Ideales para trabajar y viajar.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod_2",
    name: "Teclado Mecánico Keychron",
    price: 85,
    description: "Teclado mecánico retroiluminado RGB, switches marrones táctiles. Diseño compacto 75%.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod_3",
    name: "Mochila Urbana Minimalista",
    price: 45,
    description: "Mochila resistente al agua con compartimento para laptop de 15 pulgadas. Estilo elegante.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod_4",
    name: "Cámara Mirrorless Fuji",
    price: 850,
    description: "Cámara digital ligera con lentes intercambiables, simulación de película clásica y video 4K.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
  },
    {
    id: "prod_5",
    name: "Polo Negro",
    price: 85,
    description: "Teclado mecánico retroiluminado RGB, switches marrones táctiles. Diseño compacto 75%.",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "prod_6",
    name: "Zapatilla Urbana Minimalista",
    price: 45,
    description: "Mochila resistente al agua con compartimento para laptop de 15 pulgadas. Estilo elegante.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "prod_7",
    name: "Auriculares Inalámbricos Sony",
    price: 120,
    description: "Auriculares con cancelación de ruido activa y 30 horas de batería. Ideales para trabajar y viajar.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
  },
];