import React, { useState } from 'react';
import { Wrench, CheckCircle, Clock, Shield, Calendar, MessageCircle, X } from 'lucide-react';
import { SERVICE_PACKAGES, STORE_INFO } from '../data/products';
import { ServicePackage } from '../types';

export const ServiceSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bikeModel, setBikeModel] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('+994 ');
  const [appointmentDate, setAppointmentDate] = useState('2026-10-25');
  const [bookingDone, setBookingDone] = useState(false);

  const handleOpenBooking = (pkg: ServicePackage) => {
    setSelectedService(pkg);
    setIsBookingOpen(true);
    setBookingDone(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
  };

  const bookingWhatsappText = selectedService
    ? `Salam velo.az servis mərkəzi! Velosiped baxımı üçün qəbula yazılmaq istəyirəm:\n• Xidmət paketi: ${selectedService.title} (${selectedService.priceAZN} AZN)\n• Velosiped: ${bikeModel}\n• Müştəri: ${clientName}\n• Əlaqə: ${clientPhone}\n• Tarix: ${appointmentDate}\nBoş vaxtı təsdiq edə bilərsiniz?`
    : '';

  return (
    <section id="servis" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Wrench className="w-4 h-4" />
            <span>Rəsmi Emalatxana & Texniki Xidmət</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white mb-4">
            velo.az Peşəkar Usta Servisi
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Velosipedinizin təhlükəsizliyi və uzunömürlülüyü üçün rəsmi Shimano və SRAM alətləri ilə təchiz olunmuş Bakı emalatxanamızda zəmanətli təmir və sazlama xidmətləri.
          </p>
        </div>

        {/* 3 Service Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_PACKAGES.map((pkg, idx) => {
            const isFeatured = idx === 1; // Standart Tune-Up is featured
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-neutral-800/90 border-2 border-amber-400 shadow-xl shadow-amber-400/10'
                    : 'bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-neutral-950 text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Ən Çox Seçilən
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{pkg.duration}</span>
                    </span>
                    <span className="text-[11px] text-neutral-500 uppercase font-semibold">Paket #{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-neutral-700/60">
                    <span className="text-3xl font-extrabold font-display text-amber-400 tabular-nums">
                      {pkg.priceAZN} ₼
                    </span>
                    <span className="text-xs text-neutral-400 ml-1.5">/ velosiped</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleOpenBooking(pkg)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-md'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Qəbula Yazıl</span>
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2.5">
                    {pkg.recommendedFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workshop Advantages Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-amber-400 shrink-0 mx-auto sm:mx-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">30 Gün Zəmanət</h4>
              <p className="text-xs text-neutral-400">Görülən bütün təmir işlərinə zəmanət verilir</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-amber-400 shrink-0 mx-auto sm:mx-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Orijinal Hissələr</h4>
              <p className="text-xs text-neutral-400">Yalnız orijinal Shimano, SRAM və KMC ehtiyatları</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-amber-400 shrink-0 mx-auto sm:mx-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Foto/Video Hesabat</h4>
              <p className="text-xs text-neutral-400">Təmir prosesi barədə WhatsApp ilə video məlumat</p>
            </div>
          </div>
        </div>

      </div>

      {/* Booking Modal */}
      {isBookingOpen && selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="relative w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-2xl p-6 sm:p-8 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  Servis Qəbuluna Yazıl
                </h3>
                <span className="text-xs text-amber-400">
                  {selectedService.title} ({selectedService.priceAZN} ₼)
                </span>
              </div>
              <button
                onClick={() => setIsBookingOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingDone ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  Qəbul Sorğunuz Qeydə Alındı!
                </h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                  Usta briqadamız <strong>{appointmentDate}</strong> tarixi üçün velosipedinizi qəbul etməyə hazır olacaq.
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(bookingWhatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ilə Emalatxanaya Yaz</span>
                  </a>
                  <button
                    onClick={() => setIsBookingOpen(false)}
                    className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold"
                  >
                    Bağla
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="py-5 space-y-4 text-xs">
                <div>
                  <label className="block text-neutral-400 mb-1 font-semibold uppercase tracking-wider">
                    Velosipedinizin Markası və Modeli *
                  </label>
                  <input
                    type="text"
                    required
                    value={bikeModel}
                    onChange={(e) => setBikeModel(e.target.value)}
                    placeholder="Məs: Trek Marlin 7 və ya Trinx M100"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-400 mb-1 font-semibold uppercase tracking-wider">
                      Adınız *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Məs: İlqar Qasımov"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1 font-semibold uppercase tracking-wider">
                      Əlaqə Nömrəsi *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+994 (50) 000-00-00"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1 font-semibold uppercase tracking-wider">
                    Uyğun Tarix *
                  </label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(false)}
                    className="px-4 py-3 rounded-xl border border-neutral-700 text-neutral-400 hover:text-white"
                  >
                    Ləğv et
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm transition-colors"
                  >
                    Qəbula Yazılmanı Təsdiqlə
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
