import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function ReelCard({ reel, index, active, onActivate }) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (!active && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
        }
    }, [active]);

    const toggle = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            onActivate(index);
            video.play().catch(() => {});
        } else {
            video.pause();
        }
    };

    return (
        <div
            data-testid={`reel-card-${reel.id}`}
            onClick={toggle}
            className="card-hover group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-charcoal"
        >
            <video
                ref={videoRef}
                src={reel.src}
                data-testid={`reel-video-${reel.id}`}
                className="absolute inset-0 h-full w-full object-cover"
                loop
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />

            <div
                className={`absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/30 transition-opacity duration-500 ${
                    playing ? "opacity-0" : "opacity-100"
                }`}
            />

            {!playing && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        data-testid={`reel-play-btn-${reel.id}`}
                        aria-label={`Play ${reel.title}`}
                        className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-cream transition-[transform,background-color,border-color] duration-300 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/20"
                    >
                        <Play className="h-6 w-6 fill-current" />
                    </button>
                </div>
            )}

            {playing && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-ink/50 backdrop-blur-xl text-cream">
                        <Pause className="h-5 w-5 fill-current" />
                    </span>
                </div>
            )}

            <div
                className={`absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-500 ${
                    playing ? "opacity-0" : "opacity-100"
                }`}
            >
                <p className="font-heading text-xs font-bold tracking-[0.2em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                </p>
                <p
                    data-testid={`reel-title-${reel.id}`}
                    className="font-heading mt-1 text-lg font-bold tracking-tight text-cream"
                >
                    {reel.title}
                </p>
                <p className="text-xs text-cream/50">{reel.category}</p>
            </div>
        </div>
    );
}
