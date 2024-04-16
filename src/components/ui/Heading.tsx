import classNames from 'classnames';

type HeadingType = {
  className?: String;
  number: string;
  title: string;
  color?: 'dark' | 'light';
};

const Heading: React.FC<HeadingType> = ({
  color = 'dark',
  className,
  number,
  title,
}) => {
  return (
    <div
      className={classNames(
        'relative h-28 w-[250px] flex items-end justify-end',
        {
          'text-brand-blue': color === 'dark',
          'text-white': color == 'light',
        },
        className
      )}
    >
      <span
        className={classNames(
          'absolute -top-2 left-4 text-8xl font-black text-transparent opacity-50 z-0',
          {
            'font-outline-dark': color === 'dark',
            'font-outline-light': color == 'light',
          }
        )}
      >
        {number}
      </span>
      <div className="absolute left-8 text-6xl font-bold z-10">{title}</div>
    </div>
  );
};

export default Heading;
