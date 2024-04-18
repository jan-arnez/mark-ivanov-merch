import classNames from 'classnames';
import { SocialIcon } from 'react-social-icons';

const SocialMediaBar = ({ className }: { className?: string }) => {
  return (
    <div className={classNames('flex gap-12', className)}>
      <SocialIcon
        className="hover:opacity-80 transition-opacity"
        url="https://www.instagram.com/markkivanov/"
        target="_blank"
      />
      <SocialIcon
        className="hover:opacity-80 transition-opacity"
        url="https://sl-si.facebook.com/mark.ivanov.1401"
        target="_blank"
      />
      <SocialIcon
        className="hover:opacity-80 transition-opacity"
        url="https://www.youtube.com/@markivanov6717"
        target="_blank"
      />
    </div>
  );
};

export default SocialMediaBar;
