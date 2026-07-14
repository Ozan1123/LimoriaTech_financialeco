"use client";

import Link from "next/link";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import { useState } from "react";

export default function FinancePage() {
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
              <Link onClick={toggleDrawer} className="bg-secondary-container text-on-secondary-container rounded-full px-4 py-3 font-label-md text-label-md flex items-center gap-3" href="/finance">
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
          <div className="hidden md:flex gap-gutter">
            <Link className="text-white/80 hover:text-white transition-colors duration-200 text-label-md font-label-md" href="/tax">Tax</Link>
            <Link className="text-white border-b-2 border-white pb-1 text-label-md font-label-md" href="/finance">Finance</Link>
            <Link className="text-white/80 hover:text-white transition-colors duration-200 text-label-md font-label-md" href="/it-systems">IT Systems</Link>
          </div>
          <a href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20audit%2C%20pembukuan%2C%20atau%20tata%20kelola%20keuangan%20perusahaan%20kami." target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary text-label-md font-label-md px-5 py-2.5 rounded-lg hover:bg-white/90 transition-all duration-200 active:scale-[0.98]">
            Consultation
          </a>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <header className="bg-surface-container-low pt-8 md:pt-32 pb-8 md:pb-16 px-margin-mobile md:px-margin-desktop border-b border-outline-variant relative md:overflow-hidden mt-16 md:mt-0">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <h1 className="text-headline-lg font-headline-lg text-on-surface mb-stack-md">Keuangan</h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
              Layanan keuangan profesional untuk memastikan integritas, transparansi, dan efisiensi pelaporan keuangan perusahaan Anda. Kepercayaan dibangun melalui presisi.
            </p>
            <a className="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 active:scale-[0.98] w-full md:w-auto" href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20audit%2C%20pembukuan%2C%20atau%20tata%20kelola%20keuangan%20perusahaan%20kami." target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              Konsultasi Keuangan via WhatsApp
            </a>
          </ScrollReveal>
          <div className="hidden md:block">
            <ScrollReveal animation="fade-left" delay={200} duration={800}>
              <img className="w-full h-[400px] object-cover rounded-xl border border-outline-variant shadow-sm" alt="Corporate financial auditing" src="/asset/akuntan.jpg" />
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-xl">
          <StaggerReveal animation="fade-up" baseDelay={100} stagger={120} className="col-span-1 md:col-span-6">
            {/* Audit dan Review */}
            <div className="col-span-1 md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-stack-lg hover:border-primary hover:shadow-lg transition-all duration-300 group h-full">
              <div className="flex items-start gap-4 mb-stack-md">
                <div className="p-3 bg-surface-container rounded-lg group-hover:bg-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">fact_check</span>
                </div>
                <div>
                  <h2 className="text-headline-md font-headline-md text-on-surface">Audit dan Review Laporan Keuangan</h2>
                </div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant mb-stack-md">
                Pemeriksaan independen atas laporan keuangan perusahaan untuk memberikan keyakinan memadai bahwa laporan tersebut disajikan secara wajar dan bebas dari salah saji material, sesuai dengan standar akuntansi yang berlaku.
              </p>
              <ul className="space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Meningkatkan kredibilitas laporan keuangan bagi investor dan kreditur.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Mengidentifikasi kelemahan dalam sistem pengendalian internal.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Memastikan kepatuhan terhadap regulasi yang berlaku.
                </li>
              </ul>
            </div>

            {/* Audit Investigasi */}
            <div className="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-stack-lg hover:border-primary hover:shadow-lg transition-all duration-300 group h-full">
              <div className="flex items-start gap-4 mb-stack-md">
                <div className="p-3 bg-surface-container rounded-lg group-hover:bg-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-error group-hover:text-on-primary-container">search_insights</span>
                </div>
                <div>
                  <h2 className="text-headline-md font-headline-md text-on-surface">Audit Investigasi</h2>
                </div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant mb-stack-md">
                Penelaahan mendalam dan sistematis atas catatan keuangan untuk mengungkap indikasi kecurangan (fraud), penyimpangan, atau pelanggaran hukum yang berpotensi merugikan perusahaan.
              </p>
              <ul className="space-y-2 text-body-sm font-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                  Deteksi dini dan pencegahan kerugian finansial.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                  Pengumpulan bukti yang kuat untuk keperluan litigasi atau penyelesaian sengketa.
                </li>
              </ul>
            </div>

            {/* Penyusunan Laporan */}
            <div className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-stack-lg hover:border-primary hover:shadow-lg transition-all duration-300 group h-full">
              <div className="flex items-start gap-4 mb-stack-md">
                <div className="p-3 bg-surface-container rounded-lg group-hover:bg-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">description</span>
                </div>
                <div>
                  <h2 className="text-headline-md font-headline-md text-on-surface">Penyusunan Laporan Keuangan</h2>
                </div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant mb-stack-md">
                Jasa kompilasi dan penyusunan laporan keuangan periodik (neraca, laba rugi, arus kas) yang akurat dan tepat waktu, dirancang khusus untuk memenuhi standar pelaporan manajemen dan regulasi.
              </p>
              <ul className="space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Penyajian data yang terstruktur untuk pengambilan keputusan strategis.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Kesesuaian penuh dengan Pernyataan Standar Akuntansi Keuangan (PSAK).
                </li>
              </ul>
            </div>

            {/* Audit Internal */}
            <div className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-stack-lg hover:border-primary hover:shadow-lg transition-all duration-300 group h-full">
              <div className="flex items-start gap-4 mb-stack-md">
                <div className="p-3 bg-surface-container rounded-lg group-hover:bg-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">shield_with_heart</span>
                </div>
                <div>
                  <h2 className="text-headline-md font-headline-md text-on-surface">Audit Internal</h2>
                </div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant mb-stack-md">
                Evaluasi objektif terhadap efektivitas proses manajemen risiko, pengendalian, dan tata kelola perusahaan untuk membantu organisasi mencapai tujuannya dengan lebih efisien.
              </p>
              <ul className="space-y-2 text-body-md font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Optimalisasi proses bisnis dan efisiensi operasional.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Mitigasi risiko secara proaktif dan berkelanjutan.
                </li>
              </ul>
            </div>
          </StaggerReveal>
        </div>

        {/* ── CTA Section ── */}
        <section className="mt-8 md:mt-stack-xl bg-primary-container rounded-2xl overflow-hidden flex flex-col md:flex-row items-center">
          <ScrollReveal animation="fade-right" duration={800} className="p-6 md:p-12 flex-1">
            <h2 className="text-headline-lg font-headline-lg text-white mb-stack-sm">Butuh Bantuan Langsung?</h2>
            <p className="text-body-lg font-body-lg text-white/90 mb-stack-lg">
              Tim ahli keuangan kami siap membantu mengoptimalkan performa bisnis Anda melalui audit dan pelaporan yang presisi.
            </p>
            <a className="inline-flex items-center justify-center bg-white text-primary font-label-md text-label-md px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-surface-container-lowest transition-all duration-200 shadow-sm active:scale-[0.98] w-full md:w-auto" href="https://wa.me/6285214120235?text=Halo%20LimoriaTech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20audit%2C%20pembukuan%2C%20atau%20tata%20kelola%20keuangan%20perusahaan%20kami." target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined mr-2">chat</span>
              Hubungi Customer Service
            </a>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={200} duration={800} className="w-full md:w-1/3 h-64 md:h-auto">
            <img src="/asset/professional_and_friendly_female_customer_service_representative_wearing_a (1).png" alt="Customer Service" className="w-full h-full object-cover" />
          </ScrollReveal>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-surface-container-high w-full border-t border-outline-variant mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-8 md:py-stack-xl max-w-container-max mx-auto">
          <div className="md:col-span-4">
            <div className="text-headline-sm font-headline-sm font-bold text-on-surface mb-stack-sm">
              LimoriaTech
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              © 2024 LimoriaTech. All rights reserved. Precision in Finance & Technology.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
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
