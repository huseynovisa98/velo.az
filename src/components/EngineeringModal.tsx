import React from 'react';
import { X, Server, Layers, Globe, Terminal, CheckCircle2, AlertTriangle, Code, ArrowRight } from 'lucide-react';

interface EngineeringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EngineeringModal: React.FC<EngineeringModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-5 border-b border-neutral-200 bg-neutral-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-neutral-950 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">
                velo.az Prototipi — Mühəndislik & Daşınma Bələdçisi
              </h3>
              <p className="text-xs text-neutral-400">
                Arxitektura təhlili, demo və real backend inteqrasiya fərqləri
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-neutral-800 text-xs sm:text-sm">
          
          {/* Section 1: Overview & Folder Structure */}
          <div>
            <h4 className="text-sm font-bold font-display text-neutral-950 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Code className="w-4 h-4 text-amber-500" />
              <span>1. Layihənin Strukturu & Ayrılmış Standalone Qovluq</span>
            </h4>
            <p className="text-neutral-600 leading-relaxed mb-3">
              Bu tətbiq həm AI Studio mühitində dərhal aktiv işləyən interaktiv React tətbiqi kimi, həm də heç bir Node.js tələb etməyən təmiz HTML, CSS və Vanilla JavaScript formatında <code>/velo-prototype/</code> qovluğunda saxlanılmışdır:
            </p>
            <div className="p-4 rounded-xl bg-neutral-950 text-neutral-200 font-mono text-xs overflow-x-auto space-y-1">
              <div>📁 /src/ — <em>Müasir React 19 + Tailwind CSS interaktiv prototip (AI Studio preview)</em></div>
              <div>📁 /velo-prototype/ — <em>Ayrılmış standalone HTML5, CSS3, Vanilla JS faylları</em></div>
              <div className="pl-4">├── index.html — Tam Azərbaycan dilli müasir mağaza səhifəsi</div>
              <div className="pl-4">├── styles.css — Mobil uyğunlaşdırılmış xüsusi dizayn stilləri</div>
              <div className="pl-4">├── app.js — Dinamik axtarış, filtr, səbət və WhatsApp generatoru</div>
              <div className="pl-4">└── README.md — Lokal və pulsuz hostinqdə yerləşdirmə təlimatı</div>
            </div>
          </div>

          {/* Section 2: Demo vs Real Backend Matrix */}
          <div>
            <h4 className="text-sm font-bold font-display text-neutral-950 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-amber-500" />
              <span>2. Demo Funksiyalar vs. Real Mağaza Backend Tələbləri</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Demo Side */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Hazırda İşləyən Demo Funksiyalar (Lokal)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-emerald-950">
                  <li>• <strong>İnteraktiv Səbət & Sayğac:</strong> Brauzerdə (LocalStorage) daimi yaddaşda saxlanılır.</li>
                  <li>• <strong>Promo Kod Simulyasiyası:</strong> "BAKU10" ilə 10% ani endirim hesablanması.</li>
                  <li>• <strong>Dinamik WhatsApp Generatoru:</strong> Sifariş kodunu, ölçünü, rəngi və məbləği daxil edən avtomatlaşdırılmış mesaj şablonu.</li>
                  <li>• <strong>Boy və Çərçivə Kalkulyatoru:</strong> Müştəri boyuna görə (sm) optimal düym və hərf ölçüsünü hesablayır.</li>
                  <li>• <strong>Kataloq Filtrləmə & Axtarış:</strong> Kateqoriya, AZN qiymət aralığı və təkər ölçüsünə görə ani axtarış.</li>
                  <li>• <strong>Simulyasiya Edilmiş Sifariş Təsdiqi:</strong> Unikal #VL-XXXX sifariş kodu ilə qəbz vizualı.</li>
                </ul>
              </div>

              {/* Real Backend Side */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Real Backend İnteqrasiyası Tələb Edən Bəndlər</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-950">
                  <li>• <strong>Anbar & ERP Sinxronizasiyası:</strong> 1C, iiko və ya Mikro anbar sistemi ilə real qalıqların yenilənməsi.</li>
                  <li>• <strong>Bank Ödəniş Şlüzləri:</strong> Azericard, Kapital Bank (E-point), Pasha Bank və ya GoldenPay API inteqrasiyası.</li>
                  <li>• <strong>Taksit Kartları:</strong> Birkart, Tamkart, Bolkart 3-18 ay taksit API-ləri.</li>
                  <li>• <strong>SMS Bildiriş Şlüzü:</strong> Azercell, Bakcell, Nar nömrələrinə OTP təsdiq və status bildirişləri.</li>
                  <li>• <strong>Kuryer & Çatdırılma İnteqrasiyası:</strong> 189 Kuryer, Wolt Drive və ya Azərpoçt API izləmə sistemi.</li>
                  <li>• <strong>Servis Təqvim Bazası:</strong> Usta emalatxanasının real boş saatlarını saxlayan PostgreSQL/MySQL bazası.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: How to Run Locally */}
          <div>
            <h4 className="text-sm font-bold font-display text-neutral-950 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-500" />
              <span>3. Lokal Kompüterdə İşə Salma Qaydası</span>
            </h4>
            <div className="space-y-2 text-xs">
              <p><strong>A. React Layihəsi (cari mühit):</strong></p>
              <pre className="p-3 bg-neutral-100 rounded-lg text-neutral-900 font-mono">
npm install{'\n'}npm run dev
              </pre>
              <p className="pt-2"><strong>B. Standalone HTML/CSS/JS Versiyası:</strong></p>
              <p className="text-neutral-600">
                Sadəcə <code>/velo-prototype/index.html</code> faylını istənilən veb brauzerdə (Google Chrome, Safari, Edge) iki dəfə klikləyərək açın. Heç bir server tələb olunmur!
              </p>
            </div>
          </div>

          {/* Section 4: Free Static Deployment */}
          <div>
            <h4 className="text-sm font-bold font-display text-neutral-950 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-500" />
              <span>4. Pulsuz Statik Hostinqdə Yerləşdirmə Təlimatı</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50">
                <strong className="text-neutral-900 block mb-1">Vercel & Netlify</strong>
                <p className="text-neutral-600">
                  GitHub reposunu bağlayın. Build command: <code>npm run build</code>, Output directory: <code>dist</code>.
                </p>
              </div>
              <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50">
                <strong className="text-neutral-900 block mb-1">GitHub Pages</strong>
                <p className="text-neutral-600">
                  <code>/velo-prototype/</code> qovluğundakı faylları <code>gh-pages</code> qoluna yükləyin və ya Vite dist qovluğunu yönləndirin.
                </p>
              </div>
              <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50">
                <strong className="text-neutral-900 block mb-1">Cloudflare Pages</strong>
                <p className="text-neutral-600">
                  Pulsuz limitsiz zolaq genişliyi. Repozitoriyanı birbaşa Cloudflare Pages panelinə bağlayaraq avtomatik deploy əldə edin.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex justify-between items-center">
          <span className="text-[11px] text-neutral-500 font-mono">
            velo.az Redesign Prototype · v1.0.0
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Anladım, Prototipə Qayıt
          </button>
        </div>

      </div>
    </div>
  );
};
