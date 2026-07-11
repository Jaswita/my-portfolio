// Shared mouse-tracking handlers for the "spotlight" glow + subtle 3D tilt
// used across project cards, service cards, and testimonial cards.

export function onCardMouseMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const px = (x / rect.width) * 100;
  const py = (y / rect.height) * 100;

  card.style.setProperty('--mx', `${px}%`);
  card.style.setProperty('--my', `${py}%`);

  // Small tilt range so it stays subtle, not gimmicky
  const rx = ((x / rect.width) - 0.5) * 6;
  const ry = ((y / rect.height) - 0.5) * -6;
  card.style.setProperty('--rx', `${rx}deg`);
  card.style.setProperty('--ry', `${ry}deg`);
}

export function onCardMouseLeave(e) {
  const card = e.currentTarget;
  card.style.setProperty('--rx', `0deg`);
  card.style.setProperty('--ry', `0deg`);
}
