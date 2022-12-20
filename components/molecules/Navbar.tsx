import { FC, ReactNode, MouseEvent } from "react";
import { useGenerals } from "../../context/generals.context";
import { ActiveLink, Logo, Socials } from "../atoms";

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}



export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
  const { polylang } = useGenerals()


  return (
    <nav className={`Navbar ${isMenuOpen ? 'isActive' : ''}`}>
      <div className="Navbar-container">
        <div className="Navbar-logo">
          <Logo />
        </div>
        <Socials />
      </div>

      <ul className="Navbar-ul">
        {polylang.menu.map(({ id, label, url }) =>
          <ActiveLink href={url} key={id} closeMenu={closeMenu} >{label}</ActiveLink>
        )}
      </ul>
    </nav>
  )
}
