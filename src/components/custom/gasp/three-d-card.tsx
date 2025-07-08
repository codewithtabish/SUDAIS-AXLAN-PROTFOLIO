'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ThreeDCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card!.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      gsap.to(card, {
        rotationY: x / 15,
        rotationX: -y / 15,
        transformPerspective: 1000,
        transformOrigin: 'center',
        duration: 0.4,
      });
    };

    const resetRotation = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    card?.addEventListener('mousemove', handleMouseMove);
    card?.addEventListener('mouseleave', resetRotation);

    return () => {
      card?.removeEventListener('mousemove', handleMouseMove);
      card?.removeEventListener('mouseleave', resetRotation);
    };
  }, []);

  return (
    <div className="flex items-center justify-center dark:border-gray-800 dark:border-[1px] dark:rounded-lg">
      <div
        ref={cardRef}
        className="w-[240px] h-[300px]  rounded-xl shadow-xl overflow-hidden flex flex-col justify-between transition-transform duration-300 ease-out"
      >
        <img
        src='/gallery/hero-one.jpeg'
          // src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
          alt="Portfolio"
          className="w-full h-2/3 object-contain"
        />
        <div className="p-3  flex flex-col items-center">
          <h2 className="text-base font-bold">Creative Developer</h2>
          <h2 className="text-base font-bold">Sudais Azlan</h2>
          <p className="text-xs mt-1 text-center">Crafting practical AI & ML models that make a difference.</p>
        </div>
      </div>
    </div>
  );
}

// https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80