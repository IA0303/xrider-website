import { useState, useMemo } from 'react';
import { videos } from '../data/videos';
import VideoCard from './VideoCard';

export default function VideoList() {
  const [search, setSearch] = useState('');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [ownerPickOnly, setOwnerPickOnly] = useState(false);
  const [horrorOnly, setHorrorOnly] = useState(false);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      if (search) {
        const q = search.toLowerCase();
        const matchTitle = v.title.toLowerCase().includes(q);
        const matchId = String(v.id).includes(q);
        if (!matchTitle && !matchId) return false;
      }
      if (availableOnly && !v.isAvailable) return false;
      if (ownerPickOnly && !v.ownerPick) return false;
      if (horrorOnly && !v.isHorror) return false;
      return true;
    });
  }, [search, availableOnly, ownerPickOnly, horrorOnly]);

  const availableCount = videos.filter((v) => v.isAvailable).length;

  const hasActiveFilters = availableOnly || ownerPickOnly || horrorOnly;

  function resetFilters() {
    setAvailableOnly(false);
    setOwnerPickOnly(false);
    setHorrorOnly(false);
  }

  const quickChips = [
    { label: '🟢 체험 가능', active: availableOnly, action: () => { resetFilters(); setAvailableOnly(true); } },
    { label: '🏆 사장님 추천', active: ownerPickOnly, action: () => { resetFilters(); setOwnerPickOnly(true); } },
    { label: '🟥 공포 테마', active: horrorOnly, action: () => { resetFilters(); setHorrorOnly(true); } },
  ];

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

        {/* Search bar */}
        <div className="mb-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="영상 번호 또는 제목으로 검색"
              className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
        </div>

        {/* Quick filter chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-6">
          {quickChips.map((chip) => (
            <button
              key={chip.label}
              onClick={chip.action}
              className={`flex-shrink-0 text-xs px-4 py-2 rounded-full border font-bold transition-colors ${
                chip.active
                  ? 'bg-zinc-700 border-zinc-500 text-white'
                  : 'bg-zinc-900 border-white/10 text-gray-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {chip.label}
            </button>
          ))}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex-shrink-0 text-xs px-4 py-2 rounded-full border border-white/10 text-gray-500 hover:text-white transition-colors"
            >
              전체 보기
            </button>
          )}
        </div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-gray-500 text-sm">
            <span className="text-white font-bold">{filtered.length}</span>개 영상
            {hasActiveFilters && (
              <span className="text-gray-600"> (전체 {videos.length}개 중)</span>
            )}
          </p>
        </div>

        {/* Video grid */}
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
            <button
              onClick={resetFilters}
              className="text-gray-400 hover:text-white underline text-sm transition-colors"
            >
              전체 보기
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
