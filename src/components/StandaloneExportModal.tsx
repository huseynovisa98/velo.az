import React, { useState } from 'react';
import { X, Download, Copy, Check, ExternalLink, Code2, ShieldCheck, Sparkles } from 'lucide-react';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch('/velo-az-video-background.html')
        .then((res) => res.text())
        .then((text) => {
          setHtmlContent(text);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (!htmlContent) return;
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'velo-az-video-background.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0E131A] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#CCFF00] uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tək Fayllı Standalone HTML Hazırdır</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-syne text-white">
              velo-az-video-background.html
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Bütün CSS, JavaScript, GSAP animasiyaları və 16 rəsmi VELO.az kateqoriyası tək bir faylda birləşdirilmişdir.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-5 space-y-4 text-sm text-neutral-300">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-[#141A22] border border-white/5 rounded-2xl p-4">
              <div className="text-xs font-mono font-bold text-[#CCFF00] mb-1">Düzəldilən Əsas Problemlər:</div>
              <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">.cat display düzəlişi:</strong> Inline `&lt;a&gt;` flex kart strukturuna keçirildi</li>
                <li><strong className="text-white">.reveal görünməzlik xətası:</strong> JS gecikməsində kartların itməsi aradan qaldırıldı</li>
                <li><strong className="text-white">Float xətaları:</strong> Flexbox başlıqları ilə əvəzləndi</li>
                <li><strong className="text-white">Sticky Naviqasiya:</strong> Skroll zamanı menyu həmişə əlçatan qaldı</li>
              </ul>
            </div>

            <div className="bg-[#141A22] border border-white/5 rounded-2xl p-4">
              <div className="text-xs font-mono font-bold text-[#CCFF00] mb-1">Qorunan VELO.az Məlumatları:</div>
              <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                <li>Bütün 16 kateqoriya və rəsmi keçidlər saxlanıldı</li>
                <li>8 real məhsul nümunəsi və AZN qiymətləri</li>
                <li>Sumqayıt və Bakı diler ünvanları, iş saatları</li>
                <li>6 ay rəsmi zəmanət və servis məlumatları</li>
              </ul>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CCFF00] text-[#0A0D12] font-bold text-xs hover:bg-[#d4ff1a] transition-all hover:scale-102 cursor-pointer shadow-lg shadow-[#CCFF00]/20"
            >
              <Download className="w-4 h-4" />
              <span>HTML Faylını Endir (.html)</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A232E] border border-white/15 text-white font-semibold text-xs hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[#CCFF00]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Kod Kopyalandı!' : 'Bütün Kodu Kopyala'}</span>
            </button>

            <a
              href="/velo-az-video-background.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 text-neutral-300 hover:text-white text-xs border border-white/10 hover:border-white/20 transition-colors ml-auto"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Birbaşa Brauzerdə Aç</span>
            </a>
          </div>

          {/* Preview of Code */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span className="font-mono">HTML Kodu İcmalı:</span>
              <span>{htmlContent ? `${(htmlContent.length / 1024).toFixed(1)} KB` : 'Yüklənir...'}</span>
            </div>
            <pre className="w-full h-44 bg-[#07090D] border border-white/10 rounded-2xl p-4 font-mono text-[11px] text-neutral-400 overflow-auto select-all">
              {loading ? 'Yüklənir...' : htmlContent.slice(0, 3000) + '...\n\n[Bütün kodu kopyalamaq üçün yuxarıdakı düymədən istifadə edin]'}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-neutral-500">
          <span>file:///C:/Users/User/Downloads/velo-az-video-background.html uyğundur</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5"
          >
            Bağla
          </button>
        </div>
      </div>
    </div>
  );
};
