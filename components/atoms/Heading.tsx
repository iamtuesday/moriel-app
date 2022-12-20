import { FC } from "react";

interface HeadingProps {
  subtitle: string;
  title: string;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({ subtitle, title, className }) => {
  return (
    <div className={`Heading-${className}`}>
      <div className="Heading-subtitle">
        <h3 className="Heading-h3">{subtitle}</h3>
      </div>
      <div className='Heading-h2'
        dangerouslySetInnerHTML={{ __html: title }}
      />

    </div>
  );
};
