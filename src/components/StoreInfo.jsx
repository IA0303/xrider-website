import { STORE_INFO } from '../data/store';

export default function StoreInfo() {
  const today = new Date().getDay(); // 0=일, 6=토

  return (
    <section id="store" className="py-16 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Store Info</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            매장 안내
          </h2>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
          {/* 상단: 매장명 + 뱃지 */}
          <div className="px-6 pt-6 pb-4 border-b border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/30 flex items-center justify-center flex-shrink-0">
              <span className="text-red-500 text-lg font-black">X</span>
            </div>
            <div>
              <p className="text-white font-black text-lg leading-none">{STORE_INFO.name}</p>
              <p className="text-gray-500 text-xs mt-0.5">4D 모션 체어 체험 어트랙션</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 text-xs font-bold">영업 중</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {/* 좌측: 주소 + 영업시간 */}
            <div className="p-6 space-y-5">
              {/* 주소 */}
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">위치</p>
                <p className="text-white text-sm font-medium leading-relaxed">
                  {STORE_INFO.roadAddress}
                </p>
                <p className="text-gray-500 text-xs mt-1">{STORE_INFO.lotAddress}</p>
              </div>

              {/* 전화 */}
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">전화</p>
                <a
                  href={STORE_INFO.phoneLink}
                  className="text-white text-sm font-bold hover:text-red-400 transition-colors"
                >
                  {STORE_INFO.phone}
                </a>
              </div>

              {/* 영업시간 */}
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">영업시간</p>
                <div className="space-y-1.5">
                  {STORE_INFO.hours.map((h, i) => {
                    const isToday =
                      (i === 0 && today >= 1 && today <= 5) ||
                      (i === 1 && today === 6) ||
                      (i === 2 && today === 0);
                    return (
                      <div key={i} className="flex items-center justify-between gap-4">
                        <span className={`text-xs font-bold w-14 flex-shrink-0 ${isToday ? 'text-red-400' : 'text-gray-400'}`}>
                          {h.label}
                          {isToday && <span className="ml-1 text-red-500">●</span>}
                        </span>
                        <span className={`text-sm font-medium ${isToday ? 'text-white' : 'text-gray-300'}`}>
                          {h.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 우측: 버튼 3개 */}
            <div className="p-6 flex flex-col justify-center gap-3">
              <a
                href={STORE_INFO.phoneLink}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                전화 문의
              </a>

              <a
                href={STORE_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                길찾기
              </a>

              <a
                href={STORE_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-white/10 hover:border-white/20 text-white font-bold py-3.5 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-sm"
              >
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
                네이버 플레이스
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
