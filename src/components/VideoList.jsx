import { useState, useMemo } from 'react';
import { videos, themes, targetCategories } from '../data/videos';
import VideoCard from './VideoCard';

const LEVEL_OPTIONS = ['전체', '상', '중', '하'];

export default function VideoList() {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('전체');
  const [target, setTarget] = useState('전체');
  const [thrill, setThrill] = useState('전체');
  const [scary, setScary] = useState('전체');
  const [dizziness, setDizziness] = useState('전체');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [ownerPickOnly, setOwnerPickOnly] = useState(false);
  const [beginnerOnly, setBeginnerOnly] = useState(false);
  const [kidsOnly, setKidsOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      if (search) {
        const q = search.toLowerCase();
        const matchTitle = v.title.toLowerCase().includes(q);
        const matchId = String(v.id).includes(q);
        if (!matchTitle && !matchId) return false;
      }
      if (theme !== '전체' && v.theme !== theme) return false;
      if (target !== '전체' && !v.targetAudience.includes(target)) return false;
      if (thrill !== '전체' && v.thrill !== thrill) return false;
      if (scary !== '전체' && v.scary !== scary) return false;
      if (dizziness !== '전체' && v.dizziness !== dizziness) return false;
      if (availableOnly && !v.isAvailable) return false;
      if (ownerPickOnly && !v.ownerPick) return false;
      if (beginnerOnly && !v.beginnerOk) return false;
      if (kidsOnly && !v.kidsOk) return false;
      return true;
    });
  }, [search, theme, target, thrill, scary, dizziness, availableOnly, ownerPickOnly, beginnerOnly, kidsOnly]);

  const availableCount = videos.filter((v) => v.isAvailable).length;

  const hasActiveFilters =
    theme !== '전체' || target !== '전체' || thrill !== '전체' ||
    scary !== '전체' || dizziness !== '전체' ||
    availableOnly || ownerPickOnly || beginnerOnly || kidsOnly;

  function resetFilters() {
    setTheme('전체');
    setTarget('전체');
    setThrill('전체');
    setScary('전체');
    setDizziness('전체');
    setAvailableOnly(false);
    setOwnerPickOnly(false);
    setBeginnerOnly(false);
    setKidsOnly(false);
  }

  const quickChips = [
    { label: '🟢 체험 가능', action: () => setAvailableOnly(true) },
    { label: '★ 사장님 추천', action: () => setOwnerPickOnly(true) },
    { label: '초보 추천', action: () => setBeginnerOnly(true) },
    { label: '아이 추천', action: () => setKidsOnly(true) },
    { label: '롤러코스터', action: () => setTheme('롤러코스터') },
    { label: '공포', action: () => setTheme('공포') },
    { label: '스릴 강한', action: () => setTarget('스릴 강한 영상') },
    { label: '커플 추천', action: () => setTarget('커플 추천 영상') },
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
            포스터만 보고 고민하지 마세요. 설명을 확인하고 원하는 체험을 선택하세요.
          </p>
          {/* Available count */}
          <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 text-xs font-bold px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            현재 {availableCount}개 영상 체험 가능
          </div>
        </div>

        {/* Search + Filter Toggle */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="영상 번호 또는 제목으로 검색"
              className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-bold transition-colors flex-shrink-0 ${
              hasActiveFilters
                ? 'bg-zinc-700 border-zinc-600 text-white'
                : 'bg-zinc-900 border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            필터
            {hasActiveFilters && (
              <span className="bg-white text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-black leading-none">
                !
              </span>
            )}
          </button>
        </div>

        {/* Quick chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-4">
          {quickChips.map((chip) => (
            <button
              key={chip.label}
              onClick={() => { resetFilters(); chip.action(); setShowFilters(false); }}
              className="flex-shrink-0 bg-zinc-900 border border-white/10 text-gray-400 hover:text-white hover:bg-zinc-800 text-xs px-3 py-2 rounded-full transition-colors"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5 mb-5 space-y-5">

            {/* Toggle filters row */}
            <div>
              <p className="text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider">빠른 필터</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setAvailableOnly(!availableOnly)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                    availableOnly
                      ? 'bg-emerald-800/50 border-emerald-600 text-emerald-300'
                      : 'bg-zinc-800 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${availableOnly ? 'bg-emerald-400' : 'bg-gray-600'}`} />
                  체험 가능만
                </button>
                <button
                  onClick={() => setOwnerPickOnly(!ownerPickOnly)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                    ownerPickOnly
                      ? 'bg-amber-900/50 border-amber-600 text-amber-300'
                      : 'bg-zinc-800 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  ★ 사장님 추천
                </button>
                <button
                  onClick={() => setBeginnerOnly(!beginnerOnly)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                    beginnerOnly
                      ? 'bg-blue-900/50 border-blue-600 text-blue-300'
                      : 'bg-zinc-800 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  초보 추천만
                </button>
                <button
                  onClick={() => setKidsOnly(!kidsOnly)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                    kidsOnly
                      ? 'bg-emerald-900/50 border-emerald-600 text-emerald-300'
                      : 'bg-zinc-800 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  아이 추천만
                </button>
              </div>
            </div>

            {/* Theme */}
            <div>
              <p className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">테마</p>
              <div className="flex flex-wrap gap-2">
                {themes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      theme === t
                        ? t === '공포'
                          ? 'bg-red-700 text-white'
                          : 'bg-zinc-600 text-white'
                        : 'bg-zinc-800 text-gray-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Level filters */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: '스릴 정도', state: thrill, setter: setThrill },
                { label: '무서움 정도', state: scary, setter: setScary },
                { label: '어지러움 정도', state: dizziness, setter: setDizziness },
              ].map(({ label, state, setter }) => (
                <div key={label}>
                  <p className="text-gray-400 text-xs font-bold mb-2">{label}</p>
                  <div className="flex gap-1">
                    {LEVEL_OPTIONS.map((l) => (
                      <button
                        key={l}
                        onClick={() => setter(l)}
                        className={`flex-1 py-1.5 rounded text-xs font-bold transition-colors ${
                          state === l
                            ? 'bg-zinc-600 text-white'
                            : 'bg-zinc-800 text-gray-500 border border-white/5'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Target audience */}
            <div>
              <p className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">추천 대상</p>
              <div className="flex flex-wrap gap-2">
                {['전체', ...targetCategories].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTarget(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      target === t
                        ? 'bg-zinc-600 text-white'
                        : 'bg-zinc-800 text-gray-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="w-full py-2 text-xs text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors"
              >
                필터 전체 초기화
              </button>
            )}
          </div>
        )}

        {/* Result count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-gray-500 text-sm">
            <span className="text-white font-bold">{filtered.length}</span>개 영상
            {hasActiveFilters && (
              <span className="text-gray-600"> (전체 {videos.length}개 중)</span>
            )}
          </p>
          {hasActiveFilters && (
            <button onClick={resetFilters} className="text-gray-500 hover:text-white text-xs underline transition-colors">
              초기화
            </button>
          )}
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
            <p className="text-gray-600 text-sm mb-4">필터 조건을 변경해보세요</p>
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
