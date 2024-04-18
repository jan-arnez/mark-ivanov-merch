import classNames from 'classnames';

type PageHeadingProps = {
  pageName: string;
  className?: string;
};

const PageHeading: React.FC<PageHeadingProps> = ({ pageName, className }) => {
  return (
    <div
      className={classNames(
        'text-center md:text-5xl text-4xl text-brand-blue font-bold',
        className
      )}
    >
      {pageName}
    </div>
  );
};

export default PageHeading;
