import { Image as ImageIcon } from 'lucide-react';

interface PlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

export default function Placeholder({ label, className = '', aspectRatio = 'landscape' }: PlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/9]',
  };

  return (
    <div className={`relative bg-white border border-black/10 flex flex-col items-center justify-center overflow-hidden group ${aspectClasses[aspectRatio]} ${className}`}>
      {/* Grid background for wireframe feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="z-10 flex flex-col items-center gap-2 px-4 text-center">
        <ImageIcon className="w-5 h-5 text-black/20" strokeWidth={1} />
        {label && (
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-black/40 leading-tight max-w-[200px]">
            {label}
          </span>
        )}
      </div>

      {/* Diagonal lines for wireframe image placeholder */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="0.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
