import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://xrider.kr';

export default function QRSection() {
  const [copied, setCopied] = useState(false);

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('input');
      el.value = SITE_URL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <section id="qr" className="py-20 bg-zinc-950">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-red-600 text-xs font-bold tracking-widest uppercase">QR Code</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
          QR코드로 바로 접속
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          QR코드를 스캔하고 영상을 선택해보세요.<br />
          포스터만 보고 고민하지 마세요. 설명을 확인하고 원하는 체험을 선택하세요.
        </p>

        {/* QR code container */}
        <div className="inline-flex flex-col items-center gap-6 bg-white rounded-2xl p-8 shadow-2xl shadow-red-900/20">
          <QRCodeSVG
            value={SITE_URL}
            size={200}
            bgColor="#ffffff"
            fgColor="#0a0a0a"
            level="M"
            includeMargin={false}
          />
          <div className="text-center">
            <p className="text-black text-xs font-bold tracking-widest uppercase mb-1">
              X-RIDER
            </p>
            <p className="text-gray-500 text-xs">{SITE_URL}</p>
          </div>
        </div>

        {/* URL copy */}
        <div className="mt-8 flex items-center gap-2 justify-center">
          <span className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-gray-400 text-sm font-mono flex-1 max-w-xs text-left truncate">
            {SITE_URL}
          </span>
          <button
            onClick={copyUrl}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            {copied ? '✓ 복사됨' : 'URL 복사'}
          </button>
        </div>

        {/* Tips */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
          {[
            { icon: '📱', text: '스마트폰 카메라로 스캔' },
            { icon: '🎬', text: '영상 정보 확인' },
            { icon: '✅', text: '원하는 영상 선택' },
          ].map((tip) => (
            <div key={tip.text} className="bg-zinc-900 border border-white/5 rounded-xl p-4">
              <p className="text-2xl mb-2">{tip.icon}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
