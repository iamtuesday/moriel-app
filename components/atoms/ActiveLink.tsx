import { FC, ReactNode, MouseEvent } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";


interface Props {
  children: ReactNode;
  href: string;

  closeMenu: () => void;
}

export const ActiveLink: FC<Props> = ({ children, href, closeMenu }) => {
  const router = useRouter();

  const className = router.asPath === href ? "Navbar-li active" : "Navbar-li";

  const handleClick = () => {
    router.push(href)
    closeMenu()
  }

  return (

    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
