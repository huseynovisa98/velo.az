import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, ChevronDown, CheckCircle2, Send } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('+994 ');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const faqs = [
    {
      q: 'Velosipedlər yığılmış və tənzimlənmiş vəziyyətdə çatdırılır?',
      a: 'Bəli! Bakı daxilində bütün velosipedlər peşəkar ustalarımız tərəfindən 100% yığılır, əyləcləri və ötürücüləri sazlanır və sürüşə hazır vəziyyətdə təhvil verilir.'
    },
    {
      q: 'Kreditlə və ya Birkart / Tamkart taksit kartları ilə almaq mümkündür?',
      a: 'Bəli, mağazamızda və çatdırılma zamanı Birkart, Tamkart, Bolkart ilə 3, 6, 12 və ya 18 aylıq faizsiz taksitlə ödəniş mümkündür.'
    },
    {
      q: 'Zəmanət şərtləri nələri əhatə edir?',
      a: 'Bütün velosipedlərin çərçivəsinə 2 il, ötürücü və asqı hissələrinə 1 il rəsmi zəmanət verilir. Həmçinin ilk 6 ay ərzində velo.az emalatxanasında texniki baxış tamamilə ödənişsizdir.'
    },
    {
      q: 'Azərbaycanın digər rayon və şəhərlərinə çatdırılma var?',
      a: 'Bəli, Gəncə, Sumqayıt, Şəki, Lənkəran, Quba və digər bütün bölgələrə sürətli poçt və ya kuryer şirkətləri vasitəsilə 24-48 saat ərzində xüsusi qoruyucu qutuda çatdırılma edirik.'
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const directWhatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    `Salam velo.az! Mən ${inquiryName || 'müştəri'}. Əlaqə nömrəm: ${inquiryPhone}. Mesajım: ${inquiryMessage || 'Məsləhət almaq istəyirəm.'}`
  )}`;

  return (
    <section id="elaqe" className="py-20 bg-[#0A0D12]/85 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#CCFF00] mb-2">
            Bizimlə Əlaqə
          </div>
          <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-white tracking-tight mb-3">
            Bakı Mağazası & Müştəri Dəstəyi
          </h2>
          <p className="text-neutral-400 text-sm">
            Canlı sınaq sürüşü, məsləhət və peşəkar servis üçün mağazamıza buyurun.
          </p>
        </div>

        {/* 2-Column Store Info & Fast Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Left Column: Contact Cards & Baku Map Simulation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#141A22]/90 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#CCFF00]/15 text-[#CCFF00] flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Ünvanımız</h4>
                <p className="text-sm font-semibold text-white leading-snug">
                  {STORE_INFO.address}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141A22]/90 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#CCFF00]/15 text-[#CCFF00] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">İş Saatları</h4>
                <p className="text-sm font-semibold text-white leading-snug">
                  {STORE_INFO.hours}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141A22]/90 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#CCFF00]/15 text-[#CCFF00] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Əlaqə Telefonları</h4>
                <p className="text-sm font-semibold text-white font-mono">
                  {STORE_INFO.phone} <br />
                  {STORE_INFO.mobile}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141A22]/90 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#CCFF00]/15 text-[#CCFF00] flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Elektron Poçt</h4>
                <p className="text-sm font-semibold text-white font-mono">
                  {STORE_INFO.email}
                </p>
              </div>
            </div>

            {/* Map Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 p-6 flex flex-col justify-between aspect-[16/7]">
              <div className="z-10 bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-neutral-200 max-w-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span>velo.az Flaqman Mağazası & Servis</span>
                </div>
                <p className="text-xs text-neutral-500 leading-snug">
                  Sahil metrosundan 3 dəqiqəlik piyada məsafədə. Avtomobil parkinqi mövcuddur.
                </p>
              </div>

              <div className="z-10 flex gap-2">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent('Salam, mağazanın dəqiq lokasiyasını göndərə bilərsiniz?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-xs hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Lokasiya İste</span>
                </a>
              </div>

              {/* Decorative subtle map grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
            </div>
          </div>

          {/* Right Column: Direct Quick Consultation / Message Form */}
          <div className="lg:col-span-5 bg-neutral-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase text-amber-400 block mb-1">Birbaşa Müraciət</span>
              <h3 className="text-xl font-bold font-display text-white">
                Sualınız var? Tez cavablandıraq
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Formu doldurun və ya birbaşa WhatsApp nömrəmizlə əlaqə saxlayın.
              </p>
            </div>

            {formSent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Mesajınız Qəbul Olundu!</h4>
                <p className="text-xs text-neutral-300">
                  Məsləhətçimiz qısa zamanda sizinlə əlaqə saxlayacaq.
                </p>
                <div className="pt-2">
                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ilə Canlı Yazışın</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">
                    Adınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Məs: Samir Məmmədov"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">
                    Telefon Nömrəniz *
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="+994 (50) 000-00-00"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white text-sm font-mono focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">
                    Maraqlandığınız Velosiped / Sualınız
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Məs: Boyum 180 sm-dir, Bakı bulvarı və şəhər üçün hansı modeli tövsiyə edirsiniz?"
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-800 border border-neutral-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Müraciəti Göndər</span>
                  </button>

                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-neutral-200">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-950">
              Tez-tez Verilən Suallar
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Çatdırılma, zəmanət və hissə-hissə ödəniş haqqında ən çox maraqlanılan məqamlar
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-neutral-200/90 overflow-hidden bg-neutral-50/50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-neutral-900 hover:text-amber-600 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-neutral-900' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
