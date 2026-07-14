import { Button } from "@/components/ui/button";

interface WhatsAppCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  phoneNumber?: string;
}

export function WhatsAppCTA({ 
  title, 
  description, 
  buttonText = "Hubungi WhatsApp", 
  phoneNumber = "6281234567890" 
}: WhatsAppCTAProps) {
  return (
    <section className="py-[80px] px-5 md:px-10 text-center border-y border-outline-variant bg-primary-container">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-headline-lg font-headline-lg text-on-primary-container font-bold">
          {title}
        </h2>
        <p className="text-body-lg font-body-lg text-on-primary-container/90">
          {description}
        </p>
        <div className="pt-4">
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-label-md font-label-md hover:bg-surface-tint hover:text-white transition-all shadow-sm hover:shadow-md bg-white text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">forum</span>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
