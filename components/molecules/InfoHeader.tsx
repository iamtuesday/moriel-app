import { FC } from "react";
import { useGenerals } from "../../context/generals.context";
import { Socials } from "../atoms";

export const InfoHeader: FC = () => {
  const { polylang } = useGenerals();

  const { email, phone, url_map, address } = polylang;

  return (
    <div className="InfoHeader">
      <div className="InfoHeader-container">
        <ul className="InfoHeader-ul">

          <li className="InfoHeader-li">
            <a
              className={`InfoHeader-a ${!url_map ? "pointer-events-none" : ""
                }`}
              href={url_map}
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-location InfoHeader-iconMap"></i>
              <span dangerouslySetInnerHTML={{ __html: address }}></span>
            </a>
          </li>

          <li className="InfoHeader-li">
            <a className="InfoHeader-a" href={`mailto:${email}`}>
              <i className=" icon-email-2 InfoHeader-iconMail"></i>
              {email}
            </a>
          </li>
          <li className="flex gap-3 InfoHeader-li">
            <a className="InfoHeader-a" href={`tel:${phone}`}>
              <i className="icon-phone Footer-i"></i>
              {phone}
            </a>
          </li>
        </ul>
        <Socials />
      </div>
    </div>
  );
};
