import React from 'react';
import logoImage from '../assets/images/abiy_clinic_logo_1789643645470.jpg';

interface ClinicLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  language?: 'en' | 'am';
  className?: string;
  variant?: 'light' | 'dark';
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  size = 'md',
  showText = true,
  language = 'en',
  className = '',
  variant = 'light',
}) => {
  const sizeMap = {
    xs: { img: 'w-7 h-7', text: 'text-sm', sub: 'text-[9px]', badge: 'p-0.5' },
    sm: { img: 'w-9 h-9', text: 'text-base', sub: 'text-[10px]', badge: 'p-0.5' },
    md: { img: 'w-11 h-11', text: 'text-lg', sub: 'text-[11px]', badge: 'p-1' },
    lg: { img: 'w-14 h-14', text: 'text-xl', sub: 'text-xs', badge: 'p-1.5' },
    xl: { img: 'w-20 h-20', text: 'text-2xl', sub: 'text-sm', badge: 'p-2' },
  };

  const selectedSize = sizeMap[size];
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* 3D Tooth & Atomic Orbit Logo Badge */}
      <div className={`relative ${selectedSize.img} rounded-2xl bg-white shadow-md ${isDark ? 'shadow-cyan-500/20 ring-1 ring-cyan-400/30' : 'shadow-slate-200/80 ring-1 ring-slate-200/90'} overflow-hidden flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
        <img
          src={logoImage}
          alt="Dr. Abiy Specialty Dental Clinic Logo"
          className="w-full h-full object-contain p-0.5"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dual-color accent indicator echoing the green & blue orbital rings */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gradient-to-br from-cyan-400/40 via-emerald-400/30 to-blue-500/40 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-cinzel font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-950'} ${selectedSize.text}`}>
              DR. ABIY
            </span>
            <span className={`font-bold text-[9px] px-1.5 py-0.5 rounded-full border uppercase tracking-wider ${
              isDark 
                ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border-cyan-500/30' 
                : 'bg-cyan-50 text-cyan-700 border-cyan-200'
            }`}>
              Specialty
            </span>
          </div>
          <span className={`font-medium uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'} ${selectedSize.sub}`}>
            {language === 'en' ? 'Dental Clinic • Addis Ababa' : 'የጥርስ ስፔሻሊቲ ክሊኒክ'}
          </span>
        </div>
      )}
    </div>
  );
};
