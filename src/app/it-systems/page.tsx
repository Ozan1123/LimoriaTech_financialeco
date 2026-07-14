"use client";

import Link from "next/link";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import { useState } from "react";

export default function ITSystemsPage() {
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
              <Link onClick={toggleDrawer} className="text-on-surface-variant px-4 py-3 font-label-md text-label-md flex items-center gap-3 hover:bg-surface-container-high transition-all" href="/tax">
                <span className="material-symbols-outlined">account_balance</span> Tax
              </Link>
              <Link onClick={toggleDrawer} className="text-on-surface-variant px-4 py-3 font-label-md text-label-md flex items-center gap-3 hover:bg-surface-container-high transition-all" href="/finance">
                <span className="material-symbols-outlined">payments</span> Finance
              </Link>
              <Link onClick={toggleDrawer} className="bg-secondary-container text-on-secondary-container rounded-full px-4 py-3 font-label-md text-label-md flex items-center gap-3" href="/it-systems">
                <span className="material-symbols-outlined">memory</span> IT Systems
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Desktop Navbar ── */}
      <header className="hidden md:block absolute top-0 left-0 right-0 z-50 bg-primary-container/95 nav-glass border-b border-white/10">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <Link href="/" className="text-headline-md font-headline-md font-bold text-on-primary hover:opacity-90 transition-opacity">
            LimoriaTech
          </Link>
          <nav className="hidden md:flex gap-gutter items-center">
            <Link className="text-white/70 hover:text-white text-label-md font-label-md transition-colors duration-200" href="/tax">Tax</Link>
            <Link className="text-white/70 hover:text-white text-label-md font-label-md transition-colors duration-200" href="/finance">Finance</Link>
            <Link className="text-white border-b-2 border-white pb-1 text-label-md font-label-md" href="/it-systems">IT Systems</Link>
          </nav>
          <div className="flex items-center gap-stack-md">
            <a href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20Sistem%20Teknologi%20Informasi%20(IT%20Systems)%20perusahaan%20kami." target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg text-label-md font-label-md hover:bg-surface-tint transition-all duration-200 active:scale-[0.98]">
              Consultation
            </a>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="flex-grow">
        {/* ── Hero Section ── */}
        <section className="relative bg-surface-container-low border-b border-outline-variant mt-16 md:mt-0">
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden" style={{ backgroundImage: "url('/asset/hero-card.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 md:pt-36 pb-8 md:pb-20 relative z-10 flex flex-col md:flex-row items-center gap-gutter">
            <ScrollReveal animation="fade-right" duration={800} className="flex-1 space-y-stack-md">
              <h1 className="font-headline-xl text-on-surface text-[24px] md:text-headline-lg">Sistem Teknologi Informasi</h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                Infrastruktur digital presisi tinggi untuk institusi modern. Kami merancang dan mengimplementasikan arsitektur teknologi yang kokoh, mengamankan data finansial Anda, dan mempercepat transformasi digital dengan keandalan tanpa kompromi.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Services Bento Grid ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <StaggerReveal animation="fade-up" baseDelay={100} stagger={120} className="col-span-1 md:col-span-12">
              {/* Sistem Informasi Akuntansi */}
              <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-6 md:p-stack-lg group hover:border-primary hover:shadow-lg transition-all duration-300 rounded-xl">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-stack-md bg-primary-container text-on-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-stack-sm">Sistem Informasi Akuntansi</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-stack-md">
                  Digitalisasi alur keuangan dengan tingkat presisi institusional. Solusi kami mengintegrasikan pencatatan, pelaporan, dan rekonsiliasi data secara real-time, meminimalisir human error, dan memastikan kepatuhan penuh terhadap standar akuntansi yang berlaku.
                </p>
                <ul className="space-y-stack-xs text-body-sm font-body-sm text-on-surface-variant">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Real-time General Ledger</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Automated Financial Reporting</li>
                </ul>
              </div>

              {/* E-Learning */}
              <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 md:p-stack-lg group hover:border-primary hover:shadow-lg transition-all duration-300 rounded-xl">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-stack-md bg-primary-container text-on-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-stack-sm">E-Learning</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Platform manajemen pembelajaran korporat (LMS) yang dirancang untuk skalabilitas. Fasilitasi peningkatan kompetensi SDM melalui modul interaktif, pelacakan progres analitik, dan arsitektur yang aman.
                </p>
              </div>

              {/* Sistem Management Audit */}
              <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 md:p-stack-lg group hover:border-primary hover:shadow-lg transition-all duration-300 rounded-xl">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-stack-md bg-primary-container text-on-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-stack-sm">Sistem Management Audit</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Sentralisasi proses audit internal dan eksternal. Lacak temuan, kelola dokumentasi kepatuhan, dan otomatisasi alur kerja mitigasi risiko dalam satu dashboard eksekutif yang terpadu.
                </p>
              </div>

              {/* Machine Learning */}
              <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-6 md:p-stack-lg flex flex-col md:flex-row gap-gutter group hover:border-primary hover:shadow-lg transition-all duration-300 rounded-xl">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-stack-md bg-primary-container text-on-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>memory</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-stack-sm">Machine Learning</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Ekstraksi nilai dari data historis Anda. Kami mengimplementasikan algoritma prediktif untuk mendeteksi anomali keuangan, memproyeksikan tren pasar, dan mengoptimalkan keputusan strategis berbasis data kuantitatif yang solid.
                  </p>
                </div>
                <div className="flex-1 rounded-lg bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Machine learning" src="/asset/screen2.png" />
                </div>
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-10 md:py-20 px-margin-mobile md:px-margin-desktop text-center border-t border-outline-variant border-b bg-primary-container">
          <ScrollReveal animation="fade-up" duration={800} className="max-w-2xl mx-auto space-y-stack-md">
            <h2 className="text-headline-lg font-headline-lg text-on-primary">Siap Mengoptimalkan Arsitektur Digital Anda?</h2>
            <p className="text-body-lg font-body-lg text-on-primary/90">
              Diskusikan kebutuhan infrastruktur teknologi dan keamanan data perusahaan Anda dengan konsultan ahli kami.
            </p>
            <div className="pt-stack-md">
              <a className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full text-label-md font-label-md hover:shadow-lg transition-all duration-200 shadow-sm bg-surface-container-lowest text-primary active:scale-[0.98] w-full md:w-auto justify-center" href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20Sistem%20Teknologi%20Informasi%20(IT%20Systems)%20perusahaan%20kami." target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[20px]">forum</span>
                Hubungi WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full bg-surface-container-high border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-8 md:py-12 max-w-container-max mx-auto">
          <div className="md:col-span-4 space-y-stack-sm">
            <div className="text-headline-sm font-headline-sm font-bold text-on-surface">
              LimoriaTech
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant max-w-xs">
              © 2024 LimoriaTech. All rights reserved. Precision in Finance & Technology.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-x-gutter gap-y-stack-sm justify-end items-center">
            <Link className="text-label-md font-label-md text-on-surface-variant hover:text-primary underline transition-all duration-200" href="#">Contact Us</Link>
            <Link className="text-label-md font-label-md text-on-surface-variant hover:text-primary underline transition-all duration-200" href="#">WhatsApp Consultation</Link>
            <Link className="text-label-md font-label-md text-on-surface-variant hover:text-primary underline transition-all duration-200" href="#">Privacy Policy</Link>
            <Link className="text-label-md font-label-md text-on-surface-variant hover:text-primary underline transition-all duration-200" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
