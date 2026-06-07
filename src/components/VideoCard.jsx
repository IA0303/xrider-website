import { useState } from 'react';
import { DURATION_SLOGANS } from '../data/videos';

const LEVEL_COLOR = {
  '상': { bg: 'bg-red-900/60', text: 'text-red-300', dot: 'bg-red-500' },
  '중': { bg: 'bg-amber-900/40', text: 'text-amber-300', dot: 'bg-amber-500' },
  '하': { bg: 'bg-emerald-900/40', text: 'text-emerald-300', dot: 'bg-emerald-500' },
};

function LevelRow({ label, value }) {
  const c = LEVEL_COLOR[value] ?? LEVEL_COLOR['하'];
  return (
    <div className="flex items-center justify-between gap-1">
      <span className="text-gray-500 text-xs w-14 flex-shrink-0">{label}</span>
      <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.bg} ${c.text}`}>
        {value}
      </span>
    </div>
  );
}

export default function VideoCard({ video }) {
  const [imgError, setImgError] = useState(false);
  const isHorror = video.theme === '공포';
  const slogan = DURATION_SLOGANS[video.id % DURATION_SLOGANS.length];

  return (
    <div
      className={`card-hover flex flex-col h-full rounded-2xl overflow-hidden border transition-all ${
        video.isAvailable
          ? 'bg-zinc-900 border-white/5 hover:border-white/15'
          : 'bg-zinc-950 border-white/5 opacity-60'
      }`}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-800 flex-shrink-0">
        {!imgError ? (
          <img
            src={video.poster}
            alt={video.title}
            className={`w-full h-full object-cover ${!video.isAvailable ? 'grayscale' : ''}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-zinc-800">
            <span className="text-4xl mb-2">🎬</span>
            <span className="text-xs text-center px-2">{video.title}</span>
          </div>
        )}

        {/* Number badge - top left */}
        <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm text-white text-xs font-black px-2 py-1 rounded-md leading-none">
          No.{video.id}
        </div>

        {/* HORROR badge - top right, only for horror theme */}
        {isHorror && (
          <div className="absolute top-2 right-2 bg-red-700 text-white text-xs font-black px-2 py-1 rounded-md leading-none tracking-wider">
            HORROR
          </div>
        )}

        {/* Availability badge - bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 px-2 pb-2">
          {video.isAvailable ? (
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="text-emerald-300 text-xs font-bold">현재 체험 가능</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
              <span className="text-gray-400 text-xs font-bold">현재 미운영</span>
            </div>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-3 gap-2">
        {/* 1순위: 제목 */}
        <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">
          {video.title}
        </h3>

        {/* 2순위: 추천 태그 */}
        {(video.ownerPick || video.beginnerOk || video.kidsOk) && (
          <div className="flex flex-wrap gap-1">
            {video.ownerPick && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-900/50 text-amber-300 border border-amber-700/40">
                ★ 사장님 추천
              </span>
            )}
            {video.beginnerOk && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-900/50 text-blue-300 border border-blue-700/40">
                초보 추천
              </span>
            )}
            {video.kidsOk && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-900/50 text-emerald-300 border border-emerald-700/40">
                아이 추천
              </span>
            )}
          </div>
        )}

        {/* 3순위: 한 줄 설명 */}
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{video.tagline}</p>

        {/* 4순위: 시간 + 테마 */}
        <div className="flex flex-wrap gap-1 text-xs">
          <span className="text-gray-600 bg-zinc-800 px-2 py-0.5 rounded-full">
            약 5분
          </span>
          <span className="text-gray-600 bg-zinc-800 px-2 py-0.5 rounded-full">
            {video.theme}
          </span>
        </div>

        {/* 홍보 문구 */}
        <p className="text-gray-600 text-xs italic">{slogan}</p>

        {/* 5순위: 스릴/무서움/어지러움 */}
        <div className="space-y-1 pt-1 border-t border-white/5 mt-auto">
          <LevelRow label="스릴" value={video.thrill} />
          <LevelRow label="무서움" value={video.scary} />
          <LevelRow label="어지러움" value={video.dizziness} />
        </div>

        {/* Note */}
        {video.note && (
          <p className="text-amber-700/80 text-xs leading-relaxed pt-1 border-t border-white/5">
            ⚠ {video.note}
          </p>
        )}
      </div>
    </div>
  );
}
