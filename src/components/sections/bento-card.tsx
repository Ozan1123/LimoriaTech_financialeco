import { Card } from "@/components/ui/card";

interface BentoCardProps {
  title: string;
  description: string;
  icon: string;
  listItems?: string[];
  className?: string;
}

export function BentoCard({ title, description, icon, listItems, className = "" }: BentoCardProps) {
  return (
    <Card className={`bg-surface-container-lowest border border-outline-variant p-6 md:p-8 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 group flex flex-col h-full ${className}`}>
      
      <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
        <span className="material-symbols-outlined text-primary text-3xl group-hover:text-on-primary-container transition-colors">
          {icon}
        </span>
      </div>
      
      <h3 className="text-headline-md font-headline-md text-on-surface mb-3 font-semibold">
        {title}
      </h3>
      
      <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6">
        {description}
      </p>

      {listItems && listItems.length > 0 && (
        <ul className="space-y-3 mt-auto">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
