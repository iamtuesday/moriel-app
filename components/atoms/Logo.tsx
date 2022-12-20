import { FC } from "react";
import Image from "next/image";
import { useGenerals } from "../../context/generals.context";
import { useRouter } from 'next/router'


export const Logo: FC = () => {
  const { polylang } = useGenerals();
  const router = useRouter()

   const handleClick = () => {
    router.push('/')
   };


  const { url, width, height, name } = polylang.logo;
  return (
    <picture className="cursor-pointer" onClick={handleClick}>
        <Image src={url} alt={name} width={width} height={height} />
      </picture>
  );
};
