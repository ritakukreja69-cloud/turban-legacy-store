export function VideoFrame({
  src,
  label,
  className = "h-[26rem] w-[15rem] md:h-[32rem] md:w-[18rem]",
  badge,
}: {
  src: string;
  label: string;
  className?: string;
  badge?: { top: string; bottom: string };
}) {
  return (
    <div className="stage-3d flex justify-center">
      <div className="drift-3d relative">
        <div className="shine-3d overflow-hidden rounded-[2rem] border border-gold/40 bg-card/10 p-2 shadow-[0_50px_90px_-35px_rgba(0,0,0,0.55)]">
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={label}
            className={`rounded-[1.6rem] object-cover ${className}`}
          />
        </div>
        {badge && (
          <div
            className="absolute -right-5 -bottom-5 rounded-md border border-gold/40 bg-navy-deep/95 px-5 py-3 text-center"
            style={{ transform: "translateZ(70px)" }}
          >
            <p className="font-display text-2xl leading-none text-gold">{badge.top}</p>
            <p className="text-[9px] tracking-[0.22em] text-primary-foreground/70 uppercase">
              {badge.bottom}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
