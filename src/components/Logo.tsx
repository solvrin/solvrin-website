import type { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "w-8 h-8", showText = true, ...props }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark className={className} {...props} />
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-sans font-normal text-[9.6px] tracking-[0.15em] leading-[9.6px] mb-0.5 text-white">SOLVRIN</span>
          <span className="font-sans text-[0.6rem] tracking-[0.25em] text-gray-400 uppercase leading-none">Group</span>
        </div>
      )}
    </div>
  );
}

export function LogoMark({ className = "w-8 h-8", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="120" cy="120" r="64" stroke="currentColor" strokeWidth="3" fill="none" />
      <ellipse cx="120" cy="120" rx="100" ry="1.5" fill="currentColor" stroke="none" />
      <path
        d="M 96 120 Q 120 113 144 120 Q 120 127 96 120 Z"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="120" cy="120" r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}
