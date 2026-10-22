import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, TouchEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Phone,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { phone } from "@/lib/site-data";

import V1 from "../../public/videos/V1.mp4";
import V2 from "../../public/videos/V2.mp4";
import V3 from "../../public/videos/V3.mp4";
import V4 from "../../public/videos/V4.mp4";

const videos = [V1, V2, V3, V4];

const points = [
  "Drivers who know temple timings, viewpoints and good places to stop for food",
  "Pickup from your home, hotel, Madurai airport or railway station",
  "Day trips or multi-day tours, planned around your pace",
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export function TourHighlights() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="shell">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Tour highlights</p>
            <h2 className="mt-3 max-w-lg text-4xl font-bold leading-tight lg:text-5xl">
              A glimpse of the road ahead
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-sm leading-7 text-muted-foreground">
              Short clips from the places we drive to every week—temple towns, misty hill
              stations and the southern tip of India. Watch a few, then tell us where you’d like
              to go.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-foreground">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:items-start lg:gap-6 lg:overflow-visible lg:pb-12 [&::-webkit-scrollbar]:hidden"
          onMouseLeave={() => setHovered(null)}
        >
          {videos.map((src, i) => (
            <li
              key={src}
              className="w-[68vw] max-w-[300px] shrink-0 snap-center sm:w-[280px] lg:w-auto lg:max-w-none lg:even:mt-12"
            >
              <VideoCard
                src={src}
                label={`Play tour highlight ${i + 1}`}
                dimmed={hovered !== null && hovered !== i}
                onHover={() => setHovered(i)}
                onOpen={() => setOpenIndex(i)}
              />
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-xs text-muted-foreground lg:hidden">
          Swipe for more. Tap a video to watch it with sound.
        </p>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-border bg-background p-6 sm:flex-row sm:items-center sm:justify-between lg:mt-8 lg:p-8">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold">Seen a place you’d like to visit?</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Tell us your dates and group size. We’ll plan the route, stops and timings, and send
              you a clear fare before you travel.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/online-booking" className="button-primary">
              Plan my trip
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:+91${phone}`}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-primary"
            >
              <Phone size={16} />
              Call us
            </a>
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <VideoViewer
          index={openIndex}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}

function VideoCard({
  src,
  label,
  dimmed,
  onHover,
  onOpen,
}: {
  src: string;
  label: string;
  dimmed: boolean;
  onHover: () => void;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(false);
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry) setInView(entry.intersectionRatio >= 0.6);
    }, {
      threshold: [0, 0.6, 1],
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Desktop: silent preview on hover/focus. Phones: silent preview when the card is centred.
  const shouldPlay = !reduceMotion && (canHover ? active : inView);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (shouldPlay) v.play().catch(() => {});
    else v.pause();
  }, [shouldPlay]);

  return (
    <button
      ref={cardRef}
      type="button"
      onClick={onOpen}
      onMouseEnter={() => {
        setActive(true);
        onHover();
      }}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      aria-label={label}
      className={`group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black outline-none ring-primary ring-offset-4 ring-offset-surface shadow-[0_24px_48px_-28px_rgb(0_0_0/0.55)] transition-opacity duration-300 focus-visible:ring-2 ${
        dimmed ? "opacity-60" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        src={`${src}#t=0.1`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
        <Play size={18} fill="currentColor" className="ml-0.5" />
      </span>
    </button>
  );
}

function VideoViewer({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchX = useRef<number | null>(null);
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => onChange((index + 1) % videos.length), [index, onChange]);
  const prev = useCallback(
    () => onChange((index - 1 + videos.length) % videos.length),
    [index, onChange],
  );

  // Lock page scroll, move focus into the player, restore focus on close
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  // Start each video from the beginning with sound (falls back to muted if the browser blocks it)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    setProgress(0);
    v.currentTime = 0;
    v.muted = muted;
    v.play().catch(() => {
      v.muted = true;
      setMuted(true);
      v.play().catch(() => setPaused(true));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "Tab") {
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
      if (!focusable) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const endX = e.changedTouches[0]?.clientX;
    if (touchX.current === null || endX === undefined) return;
    const dx = endX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const roundButton =
    "grid place-items-center rounded-full text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Tour highlight ${index + 1} of ${videos.length}`}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={prev}
        aria-label="Previous video"
        className={`${roundButton} mr-6 hidden h-12 w-12 bg-white/10 transition hover:bg-white/20 sm:grid`}
      >
        <ChevronLeft size={22} />
      </button>

      <div
        className="relative aspect-[9/16] h-[min(88svh,calc(94vw*16/9))] overflow-hidden rounded-2xl bg-black shadow-2xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <video
          key={index}
          ref={videoRef}
          className="absolute inset-0 h-full w-full cursor-pointer object-cover"
          src={videos[index]}
          playsInline
          preload="auto"
          onClick={togglePlay}
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (v.duration) setProgress(v.currentTime / v.duration);
          }}
          onEnded={() => (index < videos.length - 1 ? next() : setPaused(true))}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent p-4 pb-10">
          <div className="pointer-events-auto flex gap-1.5">
            {videos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => onChange(i)}
                aria-label={`Play video ${i + 1}`}
                className="h-1 flex-1 overflow-hidden rounded-full bg-white/30"
              >
                <span
                  className="block h-full bg-white"
                  style={{ width: `${i < index ? 100 : i === index ? progress * 100 : 0}%` }}
                />
              </button>
            ))}
          </div>
          <div className="pointer-events-auto mt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Turn sound on" : "Mute"}
              className={`${roundButton} h-9 w-9 bg-black/40 backdrop-blur-sm hover:bg-black/60`}
            >
              {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className={`${roundButton} h-9 w-9 bg-black/40 backdrop-blur-sm hover:bg-black/60`}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {paused && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play video"
            className={`${roundButton} absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 bg-primary shadow-xl`}
          >
            <Play size={26} fill="currentColor" className="ml-1" />
          </button>
        )}
      </div>

      <button
        type="button"
        onClick={next}
        aria-label="Next video"
        className={`${roundButton} ml-6 hidden h-12 w-12 bg-white/10 transition hover:bg-white/20 sm:grid`}
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}