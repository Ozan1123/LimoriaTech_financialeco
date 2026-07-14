"use client";

import Link from "next/link";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import { useState } from "react";

export default function TaxPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDrawer = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* ── Mobile TopAppBar & Drawer (Stitch styling) ── */}
      <div className="md:hidden">
        <nav className="fixed top-0 w-full z-50 bg-surface shadow-sm flex items-center justify-between px-margin-mobile h-16 w-full">
          <div className="flex items-center gap-4">
            <button className="text-primary active:scale-95 duration-200" onClick={toggleDrawer}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">LimoriaTech</h1>
          </div>
        </nav>

        <div 
          className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 block' : 'opacity-0 hidden pointer-events-none'}`}
          onClick={toggleDrawer}
        ></div>
        <aside 
          className={`fixed inset-y-0 left-0 z-[60] flex flex-col h-full w-72 rounded-r-xl bg-surface-container-low shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="p-margin-mobile">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-6">Limoria Menu</h2>
            <div className="flex flex-col gap-2">
              <Link onClick={toggleDrawer} className="bg-secondary-container text-on-secondary-container rounded-full px-4 py-3 font-label-md text-label-md flex items-center gap-3" href="/tax">
                <span className="material-symbols-outlined">account_balance</span> Tax
              </Link>
              <Link onClick={toggleDrawer} className="text-on-surface-variant px-4 py-3 font-label-md text-label-md flex items-center gap-3 hover:bg-surface-container-high transition-all" href="/finance">
                <span className="material-symbols-outlined">payments</span> Finance
              </Link>
              <Link onClick={toggleDrawer} className="text-on-surface-variant px-4 py-3 font-label-md text-label-md flex items-center gap-3 hover:bg-surface-container-high transition-all" href="/it-systems">
                <span className="material-symbols-outlined">memory</span> IT Systems
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Desktop Navbar ── */}
      <nav className="hidden md:block absolute top-0 left-0 right-0 z-50 bg-primary-container/95 nav-glass border-b border-white/10">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <Link href="/" className="text-headline-md font-headline-md font-bold text-white hover:opacity-90 transition-opacity">
            LimoriaTech
          </Link>
          <div className="hidden md:flex gap-gutter items-center">
            <Link className="text-white border-b-2 border-white pb-1 text-label-md font-label-md" href="/tax">Tax</Link>
            <Link className="text-white/80 hover:text-white transition-colors duration-200 text-label-md font-label-md" href="/finance">Finance</Link>
            <Link className="text-white/80 hover:text-white transition-colors duration-200 text-label-md font-label-md" href="/it-systems">IT Systems</Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white/80 cursor-pointer hover:text-white transition-colors">search</span>
            <a href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20perencanaan%20pajak%2C%20kepatuhan%20SPT%2C%20atau%20sengketa%20pajak%20perusahaan%20kami." target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary text-label-md font-label-md px-5 py-2.5 rounded-lg hover:bg-white/90 transition-all duration-200 hidden md:block active:scale-[0.98]">Consultation</a>
            <span className="material-symbols-outlined text-white cursor-pointer md:hidden">menu</span>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <header className="relative pt-8 md:pt-36 pb-12 md:pb-28 px-margin-mobile md:px-margin-desktop md:overflow-hidden bg-surface-container-low border-b border-outline-variant mt-16 md:mt-0">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
          <ScrollReveal animation="fade-right" duration={800} className="md:col-span-7 flex flex-col justify-center">
            <span className="text-primary font-label-md text-label-md uppercase tracking-widest mb-4">Layanan Perpajakan Komprehensif</span>
            <h1 className="font-display-lg text-[24px] md:text-headline-lg text-on-surface mb-4 md:mb-6">Navigasi Pajak dengan Presisi Tinggi.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
              Di LimoriaTech, kami memahami kompleksitas regulasi perpajakan. Layanan pajak kami dirancang untuk meminimalkan risiko dan memaksimalkan efisiensi, memastikan kepatuhan penuh bagi perusahaan Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20perencanaan%20pajak%2C%20kepatuhan%20SPT%2C%20atau%20sengketa%20pajak%20perusahaan%20kami." target="_blank" rel="noopener noreferrer" className="bg-primary-container text-white font-label-md text-label-md px-6 md:px-8 py-3 rounded-lg hover:bg-primary transition-colors duration-200 flex items-center gap-2 active:scale-[0.98] w-full md:w-auto justify-center">
                Konsultasi via WhatsApp
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
              <button className="border border-secondary text-secondary font-label-md text-label-md px-6 md:px-8 py-3 rounded-lg hover:bg-surface-variant transition-colors duration-200 w-full md:w-auto">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </ScrollReveal>
          <div className="md:col-span-5 relative hidden md:block">
            <ScrollReveal animation="fade-left" delay={200} duration={800}>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-surface-container rounded-xl"></div>
              <img alt="Professional tax consultation" className="w-full h-full object-cover rounded-xl shadow-sm border border-outline-variant/30" src="/asset/akuntan.jpg" />
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-grow py-10 md:py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            
            {/* ── Bento Grid ── */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <StaggerReveal animation="fade-up" baseDelay={100} stagger={100}>
                <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">SPT Bulanan</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Pengelolaan dan pelaporan Surat Pemberitahuan (SPT) Masa secara akurat dan tepat waktu untuk menghindari sanksi administratif.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Perhitungan PPh 21, 23, 4(2), dll.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Rekonsiliasi Pajak Keluaran & Masukan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Pelaporan e-Filing tepat waktu.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Restitusi Pajak</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Pendampingan proses permohonan pengembalian kelebihan pembayaran pajak dengan strategi yang terukur dan terencana.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Analisis kelayakan restitusi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Persiapan dokumen pendukung.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Representasi di hadapan pemeriksa.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">SPT Tahunan</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Penyusunan SPT Tahunan Badan dan Orang Pribadi dengan memastikan sinkronisasi antara laporan keuangan dan peraturan pajak.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Koreksi Fiskal Laporan Keuangan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Optimalisasi beban pajak (Tax Planning).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Review komprehensif pra-pelaporan.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Sengketa Pajak</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Penanganan perselisihan dengan otoritas pajak, mulai dari tahap Keberatan, Banding, hingga Peninjauan Kembali.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Penyusunan Surat Keberatan/Banding.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Advokasi di Pengadilan Pajak.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Analisis yuridis kasus sengketa.</span>
                    </li>
                  </ul>
                </div>
              </StaggerReveal>
            </div>

            {/* ── Sticky Sidebar ── */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <ScrollReveal animation="fade-left" delay={300} duration={800} className="sticky top-24">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Butuh Bantuan Segera?</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                    Tim konsultan pajak kami siap mendiskusikan kebutuhan spesifik perusahaan Anda. Hubungi kami untuk konsultasi awal tanpa komitmen.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">support_agent</span>
                      <span className="font-label-sm text-label-sm text-on-surface">Respon Cepat (SLA 2 Jam)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                      <span className="font-label-sm text-label-sm text-on-surface">Kerahasiaan Data Terjamin</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">business_center</span>
                      <span className="font-label-sm text-label-sm text-on-surface">Konsultan Bersertifikat</span>
                    </div>
                  </div>
                  <a href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20perencanaan%20pajak%2C%20kepatuhan%20SPT%2C%20atau%20sengketa%20pajak%20perusahaan%20kami." target="_blank" rel="noopener noreferrer" className="w-full bg-primary-container text-white text-label-md font-label-md px-6 py-3 rounded-lg hover:bg-primary transition-colors duration-200 flex justify-center items-center gap-2 shadow-sm active:scale-[0.98]">
                    Konsultasi via WhatsApp
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </a>
                  <p className="font-label-sm text-label-sm text-center text-on-surface-variant mt-4 opacity-70">
                    Layanan tersedia Senin - Jumat, 09:00 - 17:00 WIB
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-surface-container-high w-full border-t border-outline-variant mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-8 md:py-12 max-w-container-max mx-auto">
          <div className="md:col-span-4">
            <div className="text-headline-md font-headline-md font-bold text-on-surface mb-4">
              LimoriaTech
            </div>
            <p className="text-on-surface-variant text-body-sm font-body-sm max-w-sm">
              © 2024 LimoriaTech. All rights reserved. Precision in Finance & Technology.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-col sm:flex-row gap-6 justify-end items-start sm:items-center">
            <Link className="text-on-surface-variant hover:text-primary underline transition-all duration-200 text-label-md font-label-md" href="#">Contact Us</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-all duration-200 text-label-md font-label-md" href="#">WhatsApp Consultation</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-all duration-200 text-label-md font-label-md" href="#">Privacy Policy</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-all duration-200 text-label-md font-label-md" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
