export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">요금 안내</h2>
          <p className="text-gray-500 text-sm">예약 없이, 부담 없이</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Main price card */}
          <div className="bg-gradient-to-br from-red-950/40 to-zinc-900 border border-red-800/40 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center text-3xl mb-4">
              🎟️
            </div>
            <p className="text-gray-400 text-sm mb-2">1회 탑승 요금</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-black text-white">5,000</span>
              <span className="text-2xl text-white font-bold mb-1">원</span>
            </div>
            <p className="text-red-400 text-sm font-bold">1인 기준</p>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-white/5 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-xl flex-shrink-0">
                👥
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-0.5">최소 2인 · 최대 6인</p>
                <p className="text-gray-500 text-xs">그룹으로 함께 탑승 가능</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/5 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-xl flex-shrink-0">
                🚫
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-0.5">예약 불필요</p>
                <p className="text-gray-500 text-xs">방문 후 바로 이용 가능합니다</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/5 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-xl flex-shrink-0">
                ⏱️
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-0.5">체험 시간 약 4~6분</p>
                <p className="text-gray-500 text-xs">짧지만 강렬한 몰입 체험</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fine print */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-5 space-y-2">
          <p className="text-gray-500 text-xs leading-relaxed">
            • 1인 방문 시 2인 요금(10,000원) 결제 후 이용 가능합니다.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            • 현장 상황에 따라 대기 시간이 발생할 수 있습니다.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            • 요금 및 운영 정책은 변경될 수 있으니 방문 전 확인 바랍니다.
          </p>
        </div>
      </div>
    </section>
  );
}
