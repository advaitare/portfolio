"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 119;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === FRAME_COUNT) {
        setIsLoaded(true);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const num = (i + 1).toString().padStart(3, "0");
      img.src = `/hero/ezgif-frame-${num}.png`;

      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
        img.onerror = handleLoad; // avoid hanging
      }
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 40%"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const renderToCanvas = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const hRatio = width / img.width;
    const vRatio = height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (width - img.width * ratio) / 2;
    const centerShift_y = (height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isLoaded || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d", { alpha: false });
    if (!ctx) return;

    const index = Math.round(latest);
    const img = images[index];

    if (img && img.complete) {
      renderToCanvas(ctx, canvasRef.current, img);
    }
  });

  useEffect(() => {
    if (isLoaded && images.length > 0 && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d", { alpha: false });
      if (ctx) {
        renderToCanvas(ctx, canvasRef.current, images[Math.round(frameIndex.get())]);
      }
      const handleResize = () => {
        if (ctx && canvasRef.current) {
          renderToCanvas(ctx, canvasRef.current, images[Math.round(frameIndex.get())]);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isLoaded, images, frameIndex]);

  // Overlay Parallax logic tied to local container scroll. Native arrays prevent Framer Motion v12 clamp bugs.
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 1], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 0.6, 1.0], [0, 0, 1, 1]);

  const y1 = useTransform(scrollYProgress, [0, 0.25, 1], [0, -100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1.0], [50, 50, 0]);

  return (
    <div ref={containerRef} className="h-[350vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">

        {/* Canvas BG */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in"
          }}
        />

        {/* Render Text Overlays locally within sticky bound */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 z-10">

          {/* SECTION 1 */}
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute w-full flex flex-col items-center text-center justify-center"
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 drop-shadow-2xl">
              Advait Tare
            </h1>
            <p className="text-xl md:text-3xl font-light text-white/80 tracking-wide uppercase">
              Frontend Developer
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute top-[80%] inset-x-0 px-6 md:px-24 flex flex-col items-center justify-center text-center"
          >
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-[-0.06em] drop-shadow-sm">
                Hi there.
              </h1>
              <p className="text-xl md:text-2xl text-white mb-6 leading-[0.9] tracking-[-0.06em] drop-shadow-sm">
                I’m a frontend developer who loves building beautiful, user-friendy interfaces.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
