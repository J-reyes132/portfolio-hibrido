'use client';

interface DownloadCVButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const DownloadCVButton = ({ 
  className = '', 
  children = 'Download CV',
  variant = 'primary'
}: DownloadCVButtonProps) => {
  
  const handleDownload = () => {
    const cvUrl = '/Juan_Reyes_CV.pdf';
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Juan_Reyes_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-orange-600 to-amber-500 text-white px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-lg shadow-orange-600/10 hover:opacity-90 transition-opacity',
    secondary: 'bg-[#e5e2e1] text-[#1c1b1b] px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-[#ebe7e7] transition-colors',
    outline: 'border-2 border-stone-200 text-stone-900 px-10 py-4 rounded-full font-bold text-lg hover:border-orange-600 hover:text-orange-600 transition-all'
  };

  return (
    <button onClick={handleDownload} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};