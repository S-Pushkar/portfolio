import type { SVGProps } from "react";

export function MatplotlibIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Concentric circles */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      
      {/* Grid lines */}
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      
      {/* Colored segments */}
      <path d="M12 12 L12 2 A10 10 0 0 1 17.07 4.93 Z" fill="#D4AF37" opacity="0.7" />
      <path d="M12 12 L17.07 4.93 A10 10 0 0 1 22 12 Z" fill="#E8D67A" opacity="0.6" />
      <path d="M12 12 L22 12 A10 10 0 0 1 19.07 19.07 Z" fill="#D9A855" opacity="0.7" />
      <path d="M12 12 L19.07 19.07 A10 10 0 0 1 12 22 Z" fill="#8FBC8F" opacity="0.6" />
      <path d="M12 12 L12 22 A10 10 0 0 1 4.93 19.07 Z" fill="#66CDAA" opacity="0.6" />
      <path d="M12 12 L4.93 19.07 A10 10 0 0 1 2 12 Z" fill="#B4E5A6" opacity="0.5" />
      <path d="M12 12 L2 12 A10 10 0 0 1 4.93 4.93 Z" fill="#E6E68A" opacity="0.6" />
      <path d="M12 12 L4.93 4.93 A10 10 0 0 1 12 2 Z" fill="#5B9BD5" opacity="0.5" />
      
      {/* Center circle */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
