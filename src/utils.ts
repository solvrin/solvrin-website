export const SMOOTH_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function scrollToElement(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
