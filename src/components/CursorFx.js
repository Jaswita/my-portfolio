import React, { useEffect, useRef } from 'react';

// A lightweight custom cursor: a single dot that tracks the mouse exactly,
// and grows/glows over anything clickable so the cursor itself becomes part
// of the interaction feedback. Automatically disables itself on touch devices.
const CursorFx = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onDown = () => dot.classList.add('cursor-dot--click');
    const onUp = () => dot.classList.remove('cursor-dot--click');

    const interactiveSelector = 'a, button, .project-item, .service-item, .content-card, input, textarea, select, [role="button"]';

    const onOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        dot.classList.add('cursor-dot--hover');
      }
    };
    const onOut = (e) => {
      if (e.target.closest(interactiveSelector)) {
        dot.classList.remove('cursor-dot--hover');
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.body.classList.add('has-cursor-fx');

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.body.classList.remove('has-cursor-fx');
    };
  }, []);

  return <div className="cursor-dot" ref={dotRef} />;
};

export default CursorFx;