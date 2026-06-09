import { useState, useMemo } from 'react';
import { videos } from '../data/videos';
import VideoCard from './VideoCard';

const FILTERS = [
  { key: 'availableOnly', label: '체험 가능', test: (v) => v.isAvailable },
  { key: 'horrorOnly',    label: '공포',     test: (v) => v.isHorror },
  { key: 'coasterOnly',  label: '롤러코스터', test: (v) => v.isCoaster },
  { key: 'ownerPickOnly', label: '사장님 추천', test: (v) => v.ownerPick },
  { key: 'kidsOnly',     label: '아이 추천', test: (v) => v.kidsOk },
];

export default function VideoList() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(new Set());

  const toggle = (key) =>
    setActive((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const reset = () => setActive(new Set());

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      if (search) {
        const q = search.toLowerCase();
        if (!v.title.toLowerCase().includes(q) && !String(v.id).includes(q)) return false;
      }
      for (const { key, test } of FILTERS) {
        if (active.has(key) && !test(v)) return false;
      }
      return true;
    });
  }, [search, active]);

  const availableCount = videos.filter((v) => v.isAvailable).length;
  const hasActive = active.size > 0;

  return (
    <section id="videos" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Video List</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3">
            영상 선택하기
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            원하는 체험을 번호로 찾아 직원에게 말씀해주세요.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 text-xs font-bold px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            현재 {availableCount}개 영상 체험 가능
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="영상 번호 또는 제목으로 검색"
            className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>

        {/* Filter chips — multi-select */}
        <div className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map(({ key, label }) => {
            const on = active.has(key);
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border transition-all ${
                  on
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'bg-zinc-900 border-white/10 text-gray-400 hover:text-white hover:border-white/25'
                }`}
              >
                {on && (
                  <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {label}
              </button>
            );
          })}
          {hasActive && (
            <button
              onClick={reset}
              className="text-xs font-bold px-4 py-2 rounded-full border border-white/10 text-gray-500 hover:text-white hover:border-white/25 transition-all"
            >
              초기화
            </button>
          )}
        </div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-gray-500 text-sm">
            <span className="text-white font-bold">{filtered.length}</span>개 영상
            {(hasActive || search) && (
              <span className="text-gray-600"> (전체 {videos.length}개 중)</span>
            )}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filtered.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🎬</p>
            <p className="text-lg font-bold text-gray-500 mb-2">조건에 맞는 영상이 없습니다</p>
            <button onClick={reset} className="text-gray-400 hover:text-white underline text-sm transition-colors">
              전체 보기
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
