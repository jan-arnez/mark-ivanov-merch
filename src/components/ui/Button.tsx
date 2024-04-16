import classNames from 'classnames';
import Link from 'next/link';

type Variants = 'brand-blue' | 'brand-red' | 'brand-gold' | 'white';

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: Variants;
  children: React.ReactNode;
  className?: string;
  href: string;
}

const BASE_STYLE =
  'shifted h-12 px-6 md:px-12 min-w-max uppercase tracking-widest font-fira-sans font-bold flex items-center justify-center shadow-md text-shadow text-sm transition-colors transition-transform hover:-translate-y-1';

const VARIANT_CLASSES = {
  'brand-blue': 'bg-brand-blue text-white',
  'brand-red': 'bg-brand-red text-white',
  'brand-gold': 'bg-brand-gold text-brand-blue',
  white: 'bg-white text-brand-blue',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'brand-blue',
  children,
  className,
  href,
  ...props
}) => {
  const finalClassName = classNames(
    BASE_STYLE,
    VARIANT_CLASSES[variant],
    className
  );

  return (
    <Link href={href} className="h-max w-max">
      <button className={finalClassName} {...props}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
