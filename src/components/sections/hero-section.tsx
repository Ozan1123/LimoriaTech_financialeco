import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  badge?: string;
  imageSrc?: string;
  align?: "split" | "center";
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export function HeroSection({
  title,
  subtitle,
  badge,
  imageSrc,
  align = "split",
  primaryAction,
  secondaryAction,
}: HeroSectionProps) {
  const isCenter = align === "center";

  return (
    <section className="relative overflow-hidden bg-surface-container-low border-b border-outline-variant py-[80px] md:py-[120px] px-5 md:px-10">
      
      {isCenter && imageSrc && (
        <div className="absolute inset-0 z-0 opacity-20" 
          style={{ backgroundImage: `url('${imageSrc}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
        />
      )}

      <div className={`mx-auto max-w-[1280px] relative z-10 ${
        isCenter ? "flex flex-col items-center text-center" : "grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
      }`}>
        
        <div className={isCenter ? "max-w-2xl flex flex-col items-center gap-6" : "md:col-span-7 flex flex-col gap-6"}>
          {badge && (
            <span className="inline-flex items-center gap-2 text-primary font-label-md bg-primary/10 px-4 py-1.5 rounded-full w-max uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">verified</span>
              {badge}
            </span>
          )}

          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg font-bold text-on-surface text-balance">
            {title}
          </h1>
          
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
            {subtitle}
          </p>
          
          <div className={`flex flex-wrap gap-4 mt-2 ${isCenter ? 'justify-center' : ''}`}>
            {primaryAction && (
              <Button className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-6 rounded-lg text-label-md font-label-md flex items-center gap-2 shadow-sm">
                {primaryAction.label}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Button>
            )}
            {secondaryAction && (
              <Button variant="outline" className="border-secondary text-secondary hover:bg-surface-variant px-8 py-6 rounded-lg text-label-md font-label-md">
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </div>

        {!isCenter && imageSrc && (
          <div className="hidden md:block md:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-xl transform translate-x-4 translate-y-4"></div>
            <div className="relative rounded-xl p-2 bg-white/70 backdrop-blur-md border border-outline-variant shadow-sm h-[400px] overflow-hidden">
              <img
                src={imageSrc}
                alt="Hero Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
