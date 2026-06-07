export default function SafetyNotice() {
  return (
    <section className="py-10 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-zinc-900 border border-white/8 rounded-2xl p-6 flex gap-5 items-start">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xl flex-shrink-0 mt-0.5">
            💼
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-2">탑승 전 안내</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              탑승 중 모션체어의 움직임으로 인해 소지품이 떨어질 수 있습니다.
              휴대전화, 지갑, 가방 등 개인 소지품은 반드시{' '}
              <span className="text-white font-medium">소지품 보관 테이블에 보관</span> 후 탑승해주세요.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              안전하고 즐거운 체험을 위해 직원의 안내에 따라주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
