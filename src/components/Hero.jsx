import { useEffect, useState } from 'react';

const SLIDES = [
  { src: '/images/store/store_high.jpg', alt: 'X라이더 매장' },
  { src: '/images/store/store_3d.jpg', alt: 'X라이더 3D 체험' },
  { src: '/images/store/store_high2.jpg', alt: 'X라이더 내부' },
  { src: '/images/store/now_showing.jpg', alt: '현재 상영 중' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.src}
            alt={s.alt}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 text-red-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse-red" />
          4D 모션 체어 체험
        </div>

        {/* Logo */}
        <h1 className="text-6xl md:text-8xl font-black tracking-wider text-white mb-2 glow-red">
          X<span className="text-red-600">RIDER</span>
        </h1>
        <p className="text-gray-400 text-sm tracking-widest mb-8">엑스라이더 · 4D 체험 어트랙션</p>

        {/* Main copy */}
        <p className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
          앉는 순간,<br className="md:hidden" /> 현실이 움직인다.
        </p>
        <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed">
          단 5분, 놀이공원보다 가까운 짜릿함.<br />
          4D 입체 영상과 움직이는 의자가 만드는 특별한 체험.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#videos"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/40"
          >
            영상 둘러보기 →
          </a>
          <a
            href="#videos"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all backdrop-blur-sm"
          >
            처음 방문 추천
          </a>
        </div>

        {/* Quick info */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-red-500">●</span>
            <span>예약 불필요</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-500">●</span>
            <span>1인 5,000원</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-500">●</span>
            <span>약 30가지 영상</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-500">●</span>
            <span>최대 6인 탑승</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
        <span>스크롤</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
