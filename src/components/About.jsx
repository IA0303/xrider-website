const FEATURES = [
  { icon: '🎬', title: '약 30개의 다양한 콘텐츠', desc: '롤러코스터, 공포, 우주, 탐험 등 다양한 테마의 영상' },
  { icon: '🪑', title: '4D 모션 체어', desc: '영상에 맞춰 실시간으로 움직이는 입체 체험 의자' },
  { icon: '⚡', title: '약 4~6분의 강렬한 체험', desc: '짧지만 강렬한 경험, 부담 없이 즐기는 실내 어트랙션' },
  { icon: '🚫', title: '예약 없이 즉시 이용', desc: '방문 후 바로 영상을 선택하고 탑승 가능' },
];

const STORE_PHOTOS = [
  { src: '/images/store/가게입구.jpeg', alt: '매장 입구' },
  { src: '/images/store/가게내부.webp', alt: '매장 내부' },
  { src: '/images/store/주의사항.webp', alt: '주의사항 안내' },
  { src: '/images/store/KakaoTalk_20260608_161326934_05.jpg', alt: '체험 현장' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">About X-Rider</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
            이게 바로 <span className="text-red-600">X라이더</span>입니다
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            4D 입체 영상과 모션 체어가 결합된 실내 체험형 어트랙션.<br />
            가볍게 즐기지만 몰입감은 확실하게.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16 rounded-xl overflow-hidden">
          {STORE_PHOTOS.map((p, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-zinc-800">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.parentElement.style.background = '#1a1a1a';
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        {/* Main intro text */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
              스릴, 공포, 모험까지<br />
              <span className="text-red-500">원하는 체험을 직접 선택하세요.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              X라이더는 4D 입체 영상과 모션 체어가 결합된 실내 체험형 어트랙션입니다.
              약 30개의 다양한 콘텐츠 중 원하는 영상을 선택하면 영상에 맞춰 의자가 움직이며
              마치 놀이기구를 타는 듯한 몰입감을 경험할 수 있습니다.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              롤러코스터를 질주하거나, 공룡 세계를 탐험하거나, 우주를 날아다니는 등
              다양한 테마의 체험을 즐길 수 있습니다. 예약 없이 방문 후 바로 이용 가능하며,
              가족, 친구, 연인과 함께 특별한 추억을 만들 수 있습니다.
            </p>
            <a
              href="#videos"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              영상 둘러보기 →
            </a>
          </div>

          <div className="space-y-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-4 p-4 bg-zinc-900 rounded-xl border border-white/5 hover:border-red-900/50 transition-colors">
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{f.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target audience */}
        <div className="bg-gradient-to-r from-red-950/30 to-zinc-900 border border-red-900/30 rounded-2xl p-6 md:p-8">
          <h3 className="text-white font-bold text-lg mb-6 text-center">이런 분들께 추천합니다</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { emoji: '👨‍👩‍👧‍👦', label: '가족 나들이' },
              { emoji: '👫', label: '커플 데이트' },
              { emoji: '🧑‍🤝‍🧑', label: '친구 모임' },
              { emoji: '🧒', label: '아이와 함께' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-gray-300 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
