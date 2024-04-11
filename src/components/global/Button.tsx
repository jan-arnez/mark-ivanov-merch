import Link from 'next/link';

type Variants = 'brand-blue' | 'brand-red' | 'brand-gold' | 'white';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  children: React.ReactNode;
  href: string;
}

const Button = ({
  variant = 'brand-blue',
  children,
  className,
  href,
  ...props
}: ButtonProps) => {
  const baseStyle =
    'h-12 min-w-max md:px-12 px-6 uppercase tracking-widest font-fira-sans font-bold flex items-center justify-center shadow-md text-shadow text-sm transition-colors shifted transition-transform hover:-translate-y-1';

  const variantClasses = {
    'brand-blue': 'bg-brand-blue text-white',
    'brand-red': 'bg-brand-red text-white',
    'brand-gold': 'bg-brand-gold text-stone-900',
    white: 'bg-white text-stone-900',
  };

  const finalClassName = `${baseStyle} ${variantClasses[variant]} ${className}`;

  return (
    <Link href={href} className="h-max w-max" passHref>
      <button className={finalClassName} {...props}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
