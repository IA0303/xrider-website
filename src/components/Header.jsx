import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'X라이더 소개', href: '#about' },
    { label: '이용 방법', href: '#how-to-use' },
    { label: '요금 안내', href: '#pricing' },
    { label: '영상 선택', href: '#videos' },
    { label: '매장 안내', href: '#store' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-widest text-white group-hover:text-red-600 transition-colors">
            X<span className="text-red-600">RIDER</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#videos"
            className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded font-bold transition-colors"
          >
            영상 둘러보기
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          <div className="w-5 space-y-1">
            <span className={`block h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#videos"
              className="block text-center bg-red-600 text-white py-3 rounded font-bold"
              onClick={() => setOpen(false)}
            >
              영상 둘러보기
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
