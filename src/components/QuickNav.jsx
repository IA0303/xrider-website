import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { label: '소개', id: 'about' },
  { label: '이용 방법', id: 'how-to-use' },
  { label: '요금', id: 'pricing' },
  { label: '영상 보기', id: 'videos' },
  { label: '추천 조합', id: 'combos' },
  { label: '매장 안내', id: 'store' },
  { label: 'FAQ', id: 'faq' },
];

function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      let current = '';
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return active;
}

export default function QuickNav() {
  const active = useActiveSection();
  const scrollRef = useRef(null);
  const activeRef = useRef(null);

  // 활성 칩이 보이도록 가로 스크롤 조정
  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const chip = activeRef.current;
      const chipLeft = chip.offsetLeft;
      const chipWidth = chip.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollLeft = chipLeft - containerWidth / 2 + chipWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [active]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-14 z-40 bg-black/90 backdrop-blur-md border-b border-white/8">
      <div
        ref={scrollRef}
        className="flex gap-1.5 overflow-x-auto scrollbar-hide px-4 py-2.5 max-w-6xl mx-auto"
      >
        {NAV_ITEMS.map(({ label, id }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              ref={isActive ? activeRef : null}
              onClick={() => handleClick(id)}
              className={`flex-shrink-0 text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${
                isActive
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'bg-zinc-900 border-white/10 text-gray-400 hover:text-white hover:border-white/25'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
