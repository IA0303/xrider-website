import { useState } from 'react';

const FAQS = [
  {
    q: '예약이 필요한가요?',
    a: '아닙니다. 방문 후 바로 이용 가능합니다. 현장 상황에 따라 대기 시간이 발생할 수 있습니다.',
  },
  {
    q: '영상 길이는 얼마나 되나요?',
    a: '평균 약 5분입니다. 짧지만 강렬한 체험을 즐기실 수 있습니다.',
  },
  {
    q: '어린이도 이용 가능한가요?',
    a: '가능합니다. 다만 영상별로 스릴·무서움 정도가 다르니 이 웹사이트의 영상 정보를 확인하신 후 선택해주세요. 어린이 추천 영상도 다양하게 준비되어 있습니다.',
  },
  {
    q: '1명도 이용 가능한가요?',
    a: '가능합니다. 다만 최소 2인 기준이므로 2인 요금(10,000원) 결제 후 이용 가능합니다.',
  },
  {
    q: '최대 몇 명까지 탑승 가능한가요?',
    a: '최대 6명까지 함께 탑승 가능합니다.',
  },
  {
    q: '요금은 얼마인가요?',
    a: '1회 탑승 시 1인 5,000원입니다. 최소 2인부터 이용 가능합니다.',
  },
  {
    q: '영상을 직접 선택할 수 있나요?',
    a: '네! 약 30개의 영상 중 원하시는 것을 선택할 수 있습니다. 이 웹사이트에서 미리 영상 정보를 확인하고 번호를 메모해오시면 편리합니다.',
  },
  {
    q: '멀미나 어지러움이 심한 편인데 이용 가능한가요?',
    a: '각 영상에 어지러움 정도가 표시되어 있습니다. 어지러움이 낮은 영상을 선택하시면 됩니다. 페어리 벌룬 라이드, 아쿠아 라이드, 토이 라이드 등을 추천드립니다.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-bold text-sm leading-relaxed">{item.q}</span>
                <span
                  className={`text-red-500 text-lg flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <div className="pt-3 border-t border-white/5">
                    <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
