import { FC } from "react";
import { useGenerals } from '../../context/generals.context'

interface SocialsProps {
  className?: string;
}

export const Socials: FC<SocialsProps> = ({ className }) => {
  const { polylang } = useGenerals();

  return (
    <div className={`socials ${className}`}>
      {polylang?.socials_networks.map(({ type, id, url }) => (
        <div
          key={id}
          className={`${type === "facebook" ? "facebook" : ""} `}
          title={`${!url ? "Coming soon" : type}`}
        >
          <a
            className={`socials__link ${!url ? "pointer-events-none" : ""}`}
            href={url ? url : "#"}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`socials__icon icon-${type} `} />
          </a>
        </div>
      ))}
    </div>
  );
};
