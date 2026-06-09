const STEPS = [
  {
    step: '01',
    title: '영상 선택',
    desc: '매장 또는 이 웹사이트에서 원하는 영상을 고릅니다.',
    icon: '🎬',
  },
  {
    step: '02',
    title: '번호 확인',
    desc: '선택한 영상의 번호를 확인합니다.',
    icon: '🔢',
  },
  {
    step: '03',
    title: '직원에게 전달',
    desc: '직원에게 영상 번호를 말합니다.',
    icon: '💬',
  },
  {
    step: '04',
    title: '선결제',
    desc: '1인 5,000원, 탑승 전 결제를 진행합니다.',
    icon: '💳',
  },
  {
    step: '05',
    title: '탑승',
    desc: '안내에 따라 좌석에 착석합니다.',
    icon: '🪑',
  },
  {
    step: '06',
    title: '4D 체험 시작',
    desc: '영상과 모션 체어가 만드는 짜릿한 체험을 즐기세요!',
    icon: '🎉',
  },
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">How to Use</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
            이용 방법
          </h2>
          <p className="text-gray-500 text-sm">간단 6단계로 체험 시작</p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="relative bg-zinc-900 border border-white/5 rounded-2xl p-5 hover:border-red-900/50 transition-colors"
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600/15 border border-red-600/40 flex-shrink-0">
                  <span className="text-lg font-black text-red-500 leading-none">{s.step}</span>
                </div>
                <span className="text-2xl">{s.icon}</span>
              </div>

              {/* Arrow connector (not on last items) */}
              {i < STEPS.length - 1 && i % 2 !== 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-red-600/40 text-lg">
                  →
                </div>
              )}

              <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 flex items-start gap-3 bg-zinc-900/50 border border-white/5 rounded-xl p-4 text-sm text-gray-400">
          <span className="text-yellow-500 flex-shrink-0 mt-0.5">⚡</span>
          <p>
            예약 없이 바로 방문하여 이용 가능합니다. 현장 상황에 따라 대기 시간이 발생할 수 있습니다.
            영상 선택이 어려우시면 직원에게 문의해주세요!
          </p>
        </div>
      </div>
    </section>
  );
}
