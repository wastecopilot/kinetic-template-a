import { site } from "@/data/site";

type PhoneLinkProps = {
  className?: string;
  label?: string;
  showIcon?: boolean;
};

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
    </svg>
  );
}

/** Click-to-call link using the number from /data/site.ts. */
export function PhoneLink({ className = "", label, showIcon = true }: PhoneLinkProps) {
  return (
    <a href={site.phoneHref} className={`inline-flex items-center gap-2 whitespace-nowrap ${className}`}>
      {showIcon && <PhoneIcon />}
      <span>{label ?? site.phoneDisplay}</span>
    </a>
  );
}
