"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function TopNavBar() {
  const pathname = usePathname();

  const links = [
    { name: "IT Systems", href: "/it-systems" },
    { name: "Tax", href: "/tax" },
    { name: "Finance", href: "/finance" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-primary">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-headline-md font-bold text-on-primary font-display-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">domain</span>
            LimoriaTech
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-label-md transition-colors hover:text-on-primary/80 ${
                  isActive 
                    ? "text-on-primary border-b-2 border-on-primary pb-1" 
                    : "text-on-primary/90"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-surface-container-lowest text-primary hover:bg-surface-variant font-label-md px-6 py-5 rounded-md shadow-sm">
            Consultation
          </Button>
        </div>

        <button className="md:hidden text-on-primary flex items-center">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}
