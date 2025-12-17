import { useEffect } from "react";

export const useCursorGlow = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor-diamond";
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const follow = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      cursor.style.transform = `
        translate3d(${currentX - 40}px, ${currentY - 40}px, 0)
        rotateX(65deg)
        rotateZ(${Date.now() * 0.08}deg)
      `;

      requestAnimationFrame(follow);
    };

    follow();

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onDown = () => {
      cursor.classList.add("active");
    };

    const onUp = () => {
      cursor.classList.remove("active");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.removeChild(cursor);
    };
  }, []);
};
