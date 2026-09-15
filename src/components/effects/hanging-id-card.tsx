import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const DAMPING = 0.92;
const GRAVITY = 3000;
const MASS = 1;

function Lanyard({ length, color }: { length: number; color: string }) {
  const clampY = length;
  const ringY = length + 10;
  const hookY = length + 18;

  return (
    <svg
      width="44"
      height={length + 38}
      viewBox={`0 0 44 ${length + 38}`}
      className="mx-auto block overflow-visible"
    >
      <defs>
        <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="35%" stopColor="#27272a" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
        <linearGradient id="hookDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#52525b" />
          <stop offset="40%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#3f3f46" />
        </linearGradient>
        <linearGradient id="strapHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect x="12" y="0" width="20" height={clampY + 4} rx="2" fill={color} />
      <rect x="12" y="0" width="20" height={clampY + 4} rx="2" fill="url(#strapHighlight)" />
      <line x1="13.5" y1="0" x2="13.5" y2={clampY + 4} stroke="#ffffff" strokeOpacity="0.15" strokeWidth="0.75" strokeDasharray="3 2" />
      <line x1="30.5" y1="0" x2="30.5" y2={clampY + 4} stroke="#ffffff" strokeOpacity="0.15" strokeWidth="0.75" strokeDasharray="3 2" />
      <rect x="10" y={clampY} width="24" height="10" rx="2.5" fill="url(#metalDark)" stroke="#18181b" strokeWidth="0.8" />
      <circle cx="13.5" cy={clampY + 5} r="1.3" fill="#a1a1aa" />
      <circle cx="30.5" cy={clampY + 5} r="1.3" fill="#a1a1aa" />
      <path d={`M 15 ${clampY + 9} C 15 ${ringY + 6}, 29 ${ringY + 6}, 29 ${clampY + 9}`} fill="none" stroke="url(#metalDark)" strokeWidth="3" strokeLinecap="round" />
      <rect x="19" y={ringY + 2} width="6" height="6" rx="1" fill="url(#metalDark)" />
      <path
        d={`M 20 ${ringY + 7} L 20 ${hookY + 6} C 20 ${hookY + 15}, 24 ${hookY + 15}, 24 ${hookY + 6} L 24 ${ringY + 7}`}
        fill="none"
        stroke="url(#hookDark)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line x1="20.5" y1={hookY + 1} x2="20.5" y2={hookY + 10} stroke="#d4d4d8" strokeWidth="1.2" />
    </svg>
  );
}

export function HangingIdCard({
  children,
  ropeLength = 75,
  ropeColor = "#18181b",
  className,
  cardWidth = "w-72 sm:w-80",
}: {
  children?: ReactNode;
  ropeLength?: number;
  ropeColor?: string;
  className?: string;
  cardWidth?: string;
}) {
  const physRef = useRef({ angle: 0, vel: 0 });
  const rafRef = useRef<number | null>(null);
  const prevTimeRef = useRef<number | null>(null);
  const prevAngleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const [angle, setAngle] = useState(0);
  const dragStartX = useRef(0);
  const dragAngle0 = useRef(0);

  const tick = useCallback(
    (now: number) => {
      if (prevTimeRef.current === null) prevTimeRef.current = now;
      const dt = Math.min((now - prevTimeRef.current) / 1000, 0.05);
      prevTimeRef.current = now;
      const s = physRef.current;
      if (!isDraggingRef.current) {
        const L = ropeLength + 100;
        const torque = -(GRAVITY / L) * Math.sin(s.angle) - (DAMPING / MASS) * s.vel;
        s.vel += torque * dt;
        s.angle += s.vel * dt;
        setAngle(s.angle);
        if (Math.abs(s.angle) > 0.001 || Math.abs(s.vel) > 0.001) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          s.angle = 0;
          s.vel = 0;
          setAngle(0);
        }
      } else {
        if (dt > 0) s.vel = (s.angle - prevAngleRef.current) / dt;
        prevAngleRef.current = s.angle;
        rafRef.current = requestAnimationFrame(tick);
      }
    },
    [ropeLength],
  );

  const startPhysics = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    prevTimeRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const onPointerDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      isDraggingRef.current = true;
      dragStartX.current = e.clientX;
      dragAngle0.current = physRef.current.angle;
      prevAngleRef.current = physRef.current.angle;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      prevTimeRef.current = null;
      rafRef.current = requestAnimationFrame(tick);
    },
    [tick],
  );

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - dragStartX.current;
      const L = ropeLength + 100;
      const clamped = Math.max(-1.4, Math.min(1.4, dragAngle0.current - dx / L));
      physRef.current.angle = clamped;
      setAngle(clamped);
    },
    [ropeLength],
  );

  const onPointerUp = useCallback((e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    isDraggingRef.current = false;
  }, []);

  const onCardClick = useCallback(() => {
    if (Math.abs(physRef.current.vel) < 0.1 && Math.abs(physRef.current.angle) < 0.05) {
      physRef.current.vel = 4;
      startPhysics();
    }
  }, [startPhysics]);

  useEffect(() => {
    const kick = setTimeout(() => {
      physRef.current.vel = 2.4;
      startPhysics();
    }, 700);
    return () => {
      clearTimeout(kick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startPhysics]);

  const cardRotateDeg = angle * (180 / Math.PI);

  return (
    <div className={cn("flex flex-col items-center select-none", className)} style={{ touchAction: "none" }}>
      <div className="relative z-10 size-3.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-md" />
      <div
        className="flex cursor-grab flex-col items-center active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onClick={onCardClick}
        style={{
          transform: `rotate(${cardRotateDeg}deg)`,
          transformOrigin: "top center",
          willChange: "transform",
          marginTop: "-6px",
        }}
      >
        <div className="pointer-events-none">
          <Lanyard length={ropeLength} color={ropeColor} />
        </div>
        <div
          className={cn(
            "pointer-events-none relative mt-[-16px] overflow-hidden rounded-[1.75rem] border border-foreground/15 bg-card shadow-2xl dark:border-white/15",
            cardWidth,
          )}
        >
          <div className="pointer-events-none absolute top-2.5 left-1/2 z-30 -translate-x-1/2">
            <div className="flex h-2.5 w-9 items-center justify-center rounded-full border border-white/30 bg-black/70 shadow-inner">
              <div className="h-1 w-7 rounded-full bg-zinc-950 opacity-90" />
            </div>
          </div>
          {children}
        </div>
      </div>
      <p className="pointer-events-none mt-8 select-none text-[11px] font-medium text-muted-foreground">
        Drag or click the card
      </p>
    </div>
  );
}
