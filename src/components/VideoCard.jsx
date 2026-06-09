import { useState } from 'react';

export default function VideoCard({ video }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="card-hover flex flex-col h-full rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 bg-zinc-900 transition-all"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-800 flex-shrink-0">
        {!imgError ? (
          <img
            src={video.poster}
            alt={video.title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-zinc-800">
            <span className="text-4xl mb-2">🎬</span>
            <span className="text-xs text-center px-2">{video.title}</span>
          </div>
        )}

        {/* Number badge - top left */}
        <div className="absolute top-2 left-2 bg-black/85 backdrop-blur-sm text-white text-xs font-black px-2 py-1 rounded-md leading-none">
          No.{video.id}
        </div>

        {/* Horror badge - top right */}
        {video.isHorror && (
          <div className="absolute top-2 right-2 bg-red-700/90 text-white text-xs font-black px-2 py-1 rounded-md leading-none tracking-wide">
            공포
          </div>
        )}

      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-3 gap-2">
        {/* Title */}
        <h3 className="text-white font-bold text-sm leading-snug">
          {video.title}
        </h3>

        {/* Badges */}
        {(video.ownerPick || video.isHorror) && (
          <div className="flex flex-wrap gap-1">
            {video.ownerPick && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                🏆 사장님 추천
              </span>
            )}
            {video.isHorror && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 border border-red-700/40">
                🟥 공포 테마
              </span>
            )}
          </div>
        )}

        {/* Tagline */}
        <p className="text-gray-300 text-xs leading-relaxed mt-auto">
          {video.tagline}
        </p>
      </div>
    </div>
  );
}
