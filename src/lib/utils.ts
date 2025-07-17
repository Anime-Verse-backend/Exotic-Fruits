/**
 * @fileoverview Funciones de utilidad.
 * Contiene la función `cn`, que combina y fusiona clases de Tailwind CSS
 * de forma segura, y `formatCurrency` para mostrar precios en el formato correcto.
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
