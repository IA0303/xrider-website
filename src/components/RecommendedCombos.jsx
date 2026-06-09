import { useState } from 'react';
import { videos } from '../data/videos';

const BEST_COMBO = {
  label: '베스트 체험 조합',
  badge: '가장 많이 선택하는 조합',
  ids: [2, 27],
  tags: ['롤러코스터', '공포'],
  desc: '처음 방문한 고객들이 가장 많이 선택하는 대표 조합 — 롤러코스터의 짜릿함과 공포의 긴장감을 한 번에',
};

const COMBOS = [
  {
    label: '가족과 함께 즐기기 좋은 조합',
    ids: [1, 15],
    desc: '온 가족이 부담 없이 즐길 수 있는 추천 조합',
  },
  {
    label: '오싹한 여름 공포 조합',
    ids: [27, 28],
    desc: '공포를 좋아한다면 놓칠 수 없는 인기 조합',
    isHorror: true,
  },
  {
    label: '스릴 최강 롤러코스터 조합',
    ids: [22, 26],
    desc: '속도감과 짜릿함을 원한다면 추천',
  },
  {
    label: '사장님 추천 입문 조합',
    ids: [1, 10],
    desc: '처음 방문했다면 가장 먼저 추천하는 조합',
  },
  {
    label: '공포 입문 추천 조합',
    ids: [11, 19],
    desc: '너무 무섭지 않은 공포 입문 조합',
    isHorror: true,
  },
];

function Poster({ video, size = 'md' }) {
  const [error, setError] = useState(false);
  const sizeClass = size === 'lg' ? 'w-28 sm:w-32' : 'w-20';

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${sizeClass} aspect-[2/3] rounded-xl overflow-hidden bg-zinc-800 shadow-lg`}>
        {!error ? (
          <img
            src={video.poster}
            alt={video.title}
            className="w-full h-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs font-bold">
            {video.id}번
          </div>
        )}
      </div>
      <span className={`text-white font-black leading-none ${size === 'lg' ? 'text-xl' : 'text-base'}`}>
        {video.id}번
      </span>
    </div>
  );
}

function PosterRow({ ids, size = 'md' }) {
  const pair = ids.map((id) => videos.find((v) => v.id === id)).filter(Boolean);
  return (
    <div className="flex items-end justify-center gap-3">
      {pair.map((v, idx) => (
        <div key={v.id} className="flex items-end gap-3">
          {idx > 0 && (
            <span className={`font-black text-gray-500 mb-5 flex-shrink-0 ${size === 'lg' ? 'text-3xl' : 'text-2xl'}`}>
              +
            </span>
          )}
          <Poster video={v} size={size} />
        </div>
      ))}
    </div>
  );
}

export default function RecommendedCombos() {
  return (
    <section id="combos" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Recommended</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
            이런 조합은 어떠세요?
          </h2>
        </div>

        {/* Intro callout */}
        <div className="max-w-xl mx-auto mb-10 bg-zinc-900 border border-white/10 rounded-2xl px-6 py-5 text-center">
          <p className="text-gray-300 text-sm leading-relaxed">
            어떤 영상을 탈지 고민된다면?<br />
            <span className="text-white font-bold">롤러코스터 1편 + 공포 1편</span> 조합으로<br />
            서로 다른 매력을 한 번에 즐겨보세요.
          </p>
        </div>

        {/* Best combo — hero card */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative rounded-2xl p-6 border bg-gradient-to-br from-red-950/40 to-zinc-900 border-red-700/50 flex flex-col items-center text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black px-4 py-1 rounded-full whitespace-nowrap tracking-wide">
              {BEST_COMBO.badge}
            </div>

            <div className="mt-2 mb-5">
              <PosterRow ids={BEST_COMBO.ids} size="lg" />
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-700/40">
                롤러코스터
              </span>
              <span className="text-gray-600 font-bold">+</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-900/50 text-red-300 border border-red-700/40">
                공포
              </span>
            </div>

            <p className="text-white font-bold text-sm mb-1">{BEST_COMBO.label}</p>
            <p className="text-gray-400 text-xs leading-relaxed">{BEST_COMBO.desc}</p>
          </div>
        </div>

        {/* Other combos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMBOS.map((combo, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 border flex flex-col items-center text-center transition-all ${
                combo.isHorror
                  ? 'bg-zinc-900 border-red-900/30 hover:border-red-800/50'
                  : 'bg-zinc-900 border-white/5 hover:border-white/15'
              }`}
            >
              <div className="mb-4">
                <PosterRow ids={combo.ids} size="md" />
              </div>

              <p className="text-white font-bold text-sm mb-1">{combo.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{combo.desc}</p>

              {combo.isHorror && (
                <span className="mt-2 text-xs font-bold px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 border border-red-700/40">
                  공포 테마
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          조합은 참고용입니다. 원하는 영상 번호를 직원에게 말씀해 주세요.
        </p>
      </div>
    </section>
  );
}
