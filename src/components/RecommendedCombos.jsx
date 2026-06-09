import { useState } from 'react';
import { videos } from '../data/videos';

const COMBOS = [
  {
    label: '최고 인기 조합',
    ids: [2, 10],
    desc: '가장 많은 고객이 선택하는 대표 조합',
    highlight: true,
  },
  {
    label: '가족과 함께',
    ids: [1, 15],
    desc: '온 가족이 부담 없이 즐길 수 있는 추천 조합',
    highlight: false,
  },
  {
    label: '오싹한 공포 조합',
    ids: [27, 28],
    desc: '공포를 좋아한다면 놓칠 수 없는 인기 조합',
    highlight: false,
    isHorror: true,
  },
  {
    label: '스릴 최강 롤러코스터',
    ids: [2, 3],
    desc: '속도감과 짜릿함을 좋아한다면 추천',
    highlight: false,
  },
  {
    label: '사장님 추천 입문 조합',
    ids: [1, 10],
    desc: '처음 방문했다면 가장 먼저 추천하는 조합',
    highlight: false,
  },
  {
    label: '공포 입문 추천 조합',
    ids: [11, 19],
    desc: '무섭지만 너무 부담스럽지 않은 공포 입문 조합',
    highlight: false,
    isHorror: true,
  },
];

function PosterPair({ ids }) {
  const [errors, setErrors] = useState({});
  const pair = ids.map((id) => videos.find((v) => v.id === id)).filter(Boolean);

  return (
    <div className="flex items-end justify-center gap-3 mb-4">
      {pair.map((v, idx) => (
        <div key={v.id} className="flex items-end gap-3">
          {idx > 0 && (
            <span className="text-gray-500 text-2xl font-black mb-6 flex-shrink-0">+</span>
          )}
          <div className="flex flex-col items-center gap-1.5">
            <div className="relative w-24 aspect-[2/3] rounded-xl overflow-hidden bg-zinc-800 shadow-lg">
              {!errors[v.id] ? (
                <img
                  src={v.poster}
                  alt={v.title}
                  className="w-full h-full object-cover"
                  onError={() => setErrors((e) => ({ ...e, [v.id]: true }))}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs font-bold">
                  {v.id}번
                </div>
              )}
            </div>
            <span className="text-white font-black text-lg leading-none">{v.id}번</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RecommendedCombos() {
  return (
    <section id="combos" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Recommended</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
            이런 조합은 어떠세요?
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            어떤 영상을 선택할지 고민된다면, 고객들이 즐겨 찾는 인기 조합을 참고해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMBOS.map((combo, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-5 border transition-all flex flex-col items-center text-center ${
                combo.highlight
                  ? 'bg-gradient-to-br from-red-950/40 to-zinc-900 border-red-800/50'
                  : combo.isHorror
                  ? 'bg-zinc-900 border-red-900/30 hover:border-red-800/50'
                  : 'bg-zinc-900 border-white/5 hover:border-white/15'
              }`}
            >
              {combo.highlight && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black px-3 py-0.5 rounded-full whitespace-nowrap">
                  인기 No.1
                </div>
              )}

              <PosterPair ids={combo.ids} />

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
