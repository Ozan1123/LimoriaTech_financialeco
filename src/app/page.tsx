"use client";

import Link from "next/link";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDrawer = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* ── Mobile TopAppBar & Drawer (Stitch styling) ── */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-surface shadow-sm flex items-center justify-between px-margin-mobile h-16">
          <div className="flex items-center gap-4">
            <button className="text-primary active:scale-95 duration-200" onClick={toggleDrawer}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">LimoriaTech</h1>
          </div>
        </header>

        <div 
          className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 block' : 'opacity-0 hidden pointer-events-none'}`}
          onClick={toggleDrawer}
        ></div>
        <aside 
          className={`fixed inset-y-0 left-0 z-[60] flex flex-col h-full w-72 rounded-r-xl bg-surface-container-low shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="p-margin-mobile">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-6">Limoria Menu</h2>
            <nav className="flex flex-col gap-2">
              <Link onClick={toggleDrawer} className="bg-secondary-container text-on-secondary-container rounded-full px-4 py-3 font-label-md text-label-md flex items-center gap-3" href="#layanan">
                <span className="material-symbols-outlined">design_services</span> Layanan Kami
              </Link>
              <Link onClick={toggleDrawer} className="text-on-surface-variant px-4 py-3 font-label-md text-label-md flex items-center gap-3 hover:bg-surface-container-high transition-all" href="#tentang">
                <span className="material-symbols-outlined">info</span> Tentang Kami
              </Link>
              <Link onClick={toggleDrawer} className="text-on-surface-variant px-4 py-3 font-label-md text-label-md flex items-center gap-3 hover:bg-surface-container-high transition-all" href="#kontak">
                <span className="material-symbols-outlined">contact_support</span> Kontak
              </Link>
            </nav>
          </div>
        </aside>
      </div>

      {/* ── Desktop Navbar ── */}
      <header className="hidden md:block absolute top-0 left-0 right-0 z-50 bg-primary/95 nav-glass border-b border-white/10">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16 md:h-20">
          <Link href="/" className="flex items-center gap-unit">
            <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>domain</span>
            <span className="text-headline-md font-headline-md font-bold text-white">LimoriaTech</span>
          </Link>
          <div className="hidden md:flex gap-gutter items-center">
            <Link className="text-white/90 font-medium text-label-md font-label-md hover:text-white transition-colors duration-200" href="#layanan">Layanan Kami</Link>
            <Link className="text-white/90 font-medium text-label-md font-label-md hover:text-white transition-colors duration-200" href="#tentang">Tentang Kami</Link>
            <Link className="text-white/90 font-medium text-label-md font-label-md hover:text-white transition-colors duration-200" href="#kontak">Kontak</Link>
          </div>
          <Link href="#kontak" className="inline-block bg-white text-primary px-5 py-2.5 rounded-lg text-label-md font-label-md active:scale-95 transition-all hover:bg-white/90 shadow-sm">
            Hubungi Kami
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        {/* ── Hero Section ── */}
        <section className="relative pt-20 md:pt-44 pb-16 md:pb-32 px-margin-mobile md:px-margin-desktop mt-16 md:mt-0">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="bg-cover bg-center w-full h-full opacity-15" style={{ backgroundImage: 'url("/asset/unnamed.jpg")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          </div>
          <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 flex flex-col gap-6">
              <ScrollReveal animation="fade-down" delay={100} duration={800}>
                <div className="bg-primary-container text-on-primary-container rounded-lg p-4 flex items-center gap-3 mb-2 shadow-md border border-primary/20 max-w-2xl">
                  <span className="material-symbols-outlined text-on-primary-container text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
                  <p className="text-body-md font-bold m-0 leading-tight">Konsultasi Awal 30 Menit GRATIS bersama admin terpercaya yang berpengalaman dan profesional.</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-right" delay={200} duration={800} className="flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 text-secondary md:text-primary font-label-sm text-label-sm uppercase tracking-wider bg-secondary-container/20 md:bg-primary/10 px-3 py-1 rounded-full w-max">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                  Sinergi Keahlian Bisnis & Teknologi Terkini
                </span>
                <h1 className="text-[26px] md:text-display-lg font-display-lg text-on-background text-balance font-bold leading-tight">
                  Solusi Komprehensif untuk Transformasi Bisnis Anda
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                  Dari optimalisasi sistem TI, strategi perpajakan cerdas, hingga manajemen keuangan presisi, LimoriaTech menghadirkan solusi terintegrasi untuk mendorong pertumbuhan berkelanjutan bisnis Anda di era digital.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20bisnis%20dan%20teknologi%20untuk%20perusahaan%20saya." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 rounded-lg text-label-md font-label-md hover:bg-primary/90 transition-all shadow-sm hover:shadow-lg active:scale-[0.98] w-full md:w-auto justify-center">
                    Konsultasi Sekarang
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="hidden md:block md:col-span-5 relative">
              <ScrollReveal animation="scale-in" delay={400} duration={1000}>
                <div className="absolute inset-0 bg-primary/10 rounded-xl transform translate-x-4 translate-y-4"></div>
                <div className="glass-card rounded-xl p-2 relative shadow-sm h-[400px] flex items-center justify-center overflow-hidden border-primary/20">
                  <img className="object-cover w-full h-full rounded-lg" alt="Team collaborating" src="/asset/unnamed.jpg"/>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Services Section ── */}
        <section id="layanan" className="py-20 md:py-28 px-margin-mobile md:px-margin-desktop bg-surface border-y border-surface-variant">
          <div className="max-w-container-max mx-auto">
            <ScrollReveal animation="fade-up" duration={800} className="text-center mb-16">
              <h2 className="text-headline-lg font-headline-lg text-on-background mb-4">Layanan Utama Kami</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto">Pendekatan terpadu yang memadukan kepatuhan regulasi, efisiensi operasional, dan inovasi teknologi.</p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <StaggerReveal animation="fade-up" baseDelay={100} stagger={150}>
                {/* Pajak */}
                <div className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant hover:border-primary/50 hover:shadow-xl transition-all duration-300 group flex flex-col h-full shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-secondary-container/20 md:bg-primary/10 flex items-center justify-center mb-6 overflow-hidden group-hover:bg-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-secondary md:text-primary text-3xl group-hover:text-white transition-colors duration-300">receipt_long</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-background mb-3">Pajak</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6">
                    Perencanaan pajak strategis, manajemen kepatuhan, dan pendampingan profesional untuk meminimalkan risiko dan mengoptimalkan efisiensi kewajiban pajak perusahaan Anda.
                  </p>
                  <Link className="flex items-center gap-2 text-primary font-label-md text-label-md hover:gap-3 transition-all duration-200" href="/tax">
                    Lihat Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>

                {/* Keuangan */}
                <div className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant hover:border-primary/50 hover:shadow-xl transition-all duration-300 group flex flex-col h-full shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-secondary-container/20 md:bg-primary/10 flex items-center justify-center mb-6 overflow-hidden group-hover:bg-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-secondary md:text-primary text-3xl group-hover:text-white transition-colors duration-300">account_balance</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-background mb-3">Keuangan</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6">
                    Layanan asurans (audit) terpercaya, akuntansi komprehensif, dan business advisory untuk menjaga kesehatan finansial dan mendukung pengambilan keputusan strategis.
                  </p>
                  <Link className="flex items-center gap-2 text-primary font-label-md text-label-md hover:gap-3 transition-all duration-200" href="/finance">
                    Lihat Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>

                {/* Sistem Teknologi Informasi */}
                <div className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant hover:border-primary/50 hover:shadow-xl transition-all duration-300 group flex flex-col h-full shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-secondary-container/20 md:bg-primary/10 flex items-center justify-center mb-6 overflow-hidden group-hover:bg-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-secondary md:text-primary text-3xl group-hover:text-white transition-colors duration-300">devices</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-background mb-3">Sistem Teknologi Informasi</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6">
                    Solusi digital end-to-end, dari pengembangan perangkat lunak kustom hingga implementasi sistem terintegrasi (ERP) untuk modernisasi proses bisnis Anda.
                  </p>
                  <Link className="flex items-center gap-2 text-primary font-label-md text-label-md hover:gap-3 transition-all duration-200" href="/it-systems">
                    Lihat Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* ── Commitment Section ── */}
        <section id="tentang" className="py-12 md:py-28 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-sm border border-surface-variant md:overflow-hidden">
              <ScrollReveal animation="fade-right" duration={800} className="md:w-1/2 flex flex-col gap-6">
                <h2 className="text-headline-lg font-headline-lg text-on-background">Melayani Setiap Skala Bisnis, Secara Konvensional maupun Digital</h2>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  Baik Anda adalah korporasi besar maupun startup modern, kami berkomitmen untuk memberikan layanan terbaik. Kami memastikan setiap detail operasional dan keuangan Anda dikelola dengan presisi menggunakan metode teruji dan teknologi terkini.
                </p>
                <div className="flex gap-gutter mt-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span className="text-label-md font-label-md text-on-background">Presisi Tinggi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span className="text-label-md font-label-md text-on-background">Akurasi Digital</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={200} duration={800} className="md:w-1/2 w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-surface-variant relative shadow-sm">
                <img className="object-cover w-full h-full" alt="Professional modern office" src="/asset/unnamed (1).jpg"/>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Contact Us Section ── */}
        <section id="kontak" className="py-12 md:py-28 px-margin-mobile md:px-margin-desktop bg-on-background text-white">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <ScrollReveal animation="fade-right" duration={800} className="relative h-[280px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <img alt="Customer Service Representative" className="object-cover w-full h-full" src="/asset/professional_and_friendly_female_customer_service_representative_wearing_a (1).png"/>
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={200} duration={800} className="flex flex-col gap-8">
                <div className="bg-primary-container text-on-primary-container rounded-lg p-6 flex flex-col sm:flex-row items-center gap-4 shadow-md border border-primary/20">
                  <div className="bg-on-primary-container/10 p-3 rounded-full flex-shrink-0">
                    <span className="material-symbols-outlined text-on-primary-container text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
                  </div>
                  <p className="text-body-lg font-bold m-0 text-center sm:text-left leading-tight">Dapatkan Konsultasi Awal 30 Menit GRATIS bersama admin terpercaya yang berpengalaman dan profesional.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-display-lg-mobile md:text-headline-lg font-headline-lg text-white">Butuh Bantuan Langsung?</h2>
                  <p className="text-body-lg font-body-lg text-white/80 leading-relaxed">
                    Tim konsultan kami siap membantu menjawab pertanyaan Anda mengenai layanan IT, perpajakan, maupun keuangan kami dengan profesional.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <a href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20bisnis%20dan%20teknologi%20untuk%20perusahaan%20saya." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-3 rounded-lg text-label-md font-label-md hover:bg-primary/90 transition-all shadow-sm w-full md:w-max active:scale-[0.98]">
                    <span className="material-symbols-outlined">chat</span>
                    Hubungi via WhatsApp
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <span className="text-label-md font-label-md">Tersedia Senin - Jumat, 09:00 - 17:00 WIB</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full py-8 md:py-16 px-margin-mobile md:px-margin-desktop bg-surface border-t border-surface-variant">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
          <div className="flex flex-col gap-4 md:w-1/3 mb-gutter md:mb-0">
            <span className="text-headline-md font-headline-md font-bold text-on-background">LimoriaTech</span>
            <p className="text-body-sm font-body-sm text-on-surface-variant opacity-80">
              © 2026 LimoriaTech Financial Services. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-gutter md:w-2/3">
            <Link className="text-label-sm font-label-sm text-on-surface-variant opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200" href="#">Privacy Policy</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200" href="#">Terms of Service</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200" href="#">Cookie Policy</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200" href="#">Sitemap</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
