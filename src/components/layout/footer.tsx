import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant">
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-16 gap-8">
        
        <div className="flex flex-col gap-4 md:w-1/3 text-center md:text-left">
          <span className="text-headline-md font-bold text-on-background font-display-lg">
            LimoriaTech
          </span>
          <p className="text-body-sm text-on-surface-variant opacity-80">
            © {new Date().getFullYear()} LimoriaTech Financial Services. All rights reserved.
            <br /> Precision in Finance & Technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:w-2/3">
          <Link href="#" className="text-label-md text-on-surface-variant hover:text-primary transition-colors">
            Contact Us
          </Link>
          <Link href="#" className="text-label-md text-on-surface-variant hover:text-primary transition-colors">
            WhatsApp Consultation
          </Link>
          <Link href="#" className="text-label-md text-on-surface-variant hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-label-md text-on-surface-variant hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>

      </div>
    </footer>
  );
}
