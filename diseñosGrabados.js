// 1. Sacás los dibujos mudos de la caja de herramientas
import { FaFutbol, FaLeaf, FaHorseHead } from 'react-icons/fa';
import { GiHorseshoe, GiMate } from 'react-icons/gi';

// 2. Armás tu base de datos inteligente y la exportás
export const libreriaDisenos = [
  { 
    id: 1, 
    nombre: 'Pelota de Fútbol', 
    icono: <FaFutbol />, // Acá metés el dibujo
    tags: ['deporte', 'futbol', 'cancha', 'pelota'] // La magia del buscador
  },
  { 
    id: 2, 
    nombre: 'Caballo', 
    icono: <FaHorseHead />, 
    tags: ['campo', 'animales', 'gaucho', 'caballo', 'jinete'] 
  },
  { 
    id: 3, 
    nombre: 'Herradura de la Suerte', 
    icono: <GiHorseshoe />, 
    tags: ['campo', 'suerte', 'herradura', 'tradicion'] 
  },
  // ... y así podés tener 200 objetos más sin ensuciar tu componente principal
];