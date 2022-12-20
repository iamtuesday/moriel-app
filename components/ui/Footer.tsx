import React from "react";
import { Socials } from "../atoms";
import { useGenerals } from "../../context/generals.context";

export const Footer = () => {
  const { polylang } = useGenerals();

  const {lbl_follow_us, schedule, phone, lbl_solar_energy } = polylang;

  return (
    <footer className="Footer">
      <div className="Footer-container">
        <ul className="Footer-ul">
          <li className="Footer-lblSolar">
            {lbl_solar_energy}
          </li>
          <li className="flex gap-3">
            <a className="Footer-a" href={`tel:${phone}`}>
              <i className="icon-phone-2 Footer-i"></i>
              {phone}
            </a>
          </li>
          <li>
            <a className="Footer-a" href={`mailto:${schedule}`}>
              <i className="icon-schedule Footer-i"></i>
              {schedule}
            </a>
          </li>

        </ul>
        <div  className="Footer-Socials">
          <p className="Footer-lblFollow">{lbl_follow_us}</p>
        <Socials className="Footer-socials" />
        </div>
      </div>
    </footer>
  );
};
