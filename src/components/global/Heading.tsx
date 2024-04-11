type HeadingType = {
  className?: String;
  number: string;
  title: string;
  color?: 'dark' | 'light';
};

const Heading = ({ color = 'dark', className, number, title }: HeadingType) => {
  return (
    <div
      className={`relative h-28 w-[250px] flex items-end justify-end ${
        color === 'dark' ? 'text-stone-950' : 'text-white'
      }
      ${className}`}
    >
      <span
        className={`absolute top-0 left-0 text-8xl font-black font-outline-dark text-transparent opacity-40 z-0 ${
          color === 'dark' ? 'font-outline-dark' : 'font-outline-light'
        }`}
      >
        {number}
      </span>
      <div className="relative font-fira-sans text-6xl font-black z-10 ml-12">
        {title}
      </div>
    </div>
  );
};

export default Heading;
