import React from 'react';
// Usamos solo Font Awesome (fa) que es la más segura
import { FaFutbol, FaLeaf, FaHorseHead, FaDog, FaCat, FaTree, FaStar, FaHeart } from 'react-icons/fa';

export const libreriaDisenos = [
  {
    categoria: "Deportes",
    items: [
      { id: 2, nombre: 'Fútbol', icono: <FaFutbol />, tags: ['deporte', 'futbol'] },
      { id: 5, nombre: 'Estrella', icono: <FaStar />, tags: ['deporte', 'premio', 'estrella'] },
    ]
  },
  {
    categoria: "Campo y Animales",
    items: [
      { id: 4, nombre: 'Caballo', icono: <FaHorseHead />, tags: ['campo', 'animales'] },
      { id: 7, nombre: 'Perro', icono: <FaDog />, tags: ['mascotas', 'perro'] },
      { id: 8, nombre: 'Gato', icono: <FaCat />, tags: ['mascotas', 'gato'] },
    ]
  },
  {
    categoria: "Naturaleza",
    items: [
      { id: 3, nombre: 'Hoja', icono: <FaLeaf />, tags: ['naturaleza', 'hoja'] },
      { id: 9, nombre: 'Árbol', icono: <FaTree />, tags: ['naturaleza', 'arbol'] },
      { id: 10, nombre: 'Corazón', icono: <FaHeart />, tags: ['amor', 'naturaleza'] },
    ]
  }
];

// Muy importante: Exportamos por defecto para evitar el error de App.jsx
export default libreriaDisenos;