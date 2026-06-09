import { STORE_INFO } from '../data/store';

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

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <a href="#about" className="hover:text-white transition-colors">소개</a>
            <a href="#how-to-use" className="hover:text-white transition-colors">이용 방법</a>
            <a href="#pricing" className="hover:text-white transition-colors">요금 안내</a>
            <a href="#videos" className="hover:text-white transition-colors">영상 보기</a>
            <a href="#combos" className="hover:text-white transition-colors">추천 조합</a>
            <a href="#store" className="hover:text-white transition-colors">매장 안내</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© 2024 X라이더. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>{STORE_INFO.roadAddress}</span>
            <span className="text-white/10">·</span>
            <a href={STORE_INFO.phoneLink} className="hover:text-gray-400 transition-colors">
              {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
