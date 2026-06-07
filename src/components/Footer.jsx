export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-black tracking-widest text-white">
              X<span className="text-red-600">RIDER</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">4D 체험형 실내 어트랙션</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#about" className="hover:text-white transition-colors">소개</a>
            <a href="#how-to-use" className="hover:text-white transition-colors">이용 방법</a>
            <a href="#pricing" className="hover:text-white transition-colors">요금 안내</a>
            <a href="#videos" className="hover:text-white transition-colors">영상 선택</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2024 X라이더. All rights reserved.</p>
          <p>1인 5,000원 · 최소 2인 · 최대 6인 · 예약 불필요</p>
        </div>
      </div>
    </footer>
  );
}
