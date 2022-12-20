import { FC, useMemo, useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";
import { Socials } from "../atoms";
import { Appearance, Tab, Gallery } from "../../interfaces";

interface SmartProps {
  appearance: Appearance;
  tab: Tab;
  socials: Tab[];
  gallery: Gallery[];
}

export const SmartLinks: FC<SmartProps> = ({
  gallery,
  appearance,
  tab,
  socials,
}) => {
  const { avatar, title, description } = appearance;
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number: number) => {
    setLightboxController((prevState) => {
      return {
        toggler: !prevState.toggler,
        slide: number,
      };
    });
  };

  const images = useMemo(() => {
    return gallery.map((item) => item.img_zoom?.url);
  }, [gallery]);

  return (
    <div className="SmartLinks">
      <div className="SmartLinks-header">
        <Image
          src={avatar.url}
          alt={avatar.alternativeText || "Avatar"}
          width={100}
          height={100}
          className="SmartLinks-avatar"
        />
        <h2 className="SmartLinks-h2">{title}</h2>
        <div
          className="SmartLinks-p"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <a href={tab.value} target="_blank" rel="noreferrer" className="SmartLinks-btn">
          {tab.type}
        </a>
      <ul  className="SmartLinks-ul">
        {socials.map(({ type, value, icon }, index) => {
          return (
            <li key={index}  className="SmartLinks-li">
              <a href={value} target="_blank" rel="noreferrer">
                <Image
                  src={icon?.url || ""}
                  alt={type}
                  width={100}
                  height={100}
                />
              </a>
            </li>
          );
        })}
      </ul>
      <div className="SmartLinks-gallery">
        {gallery?.map(({ img, img_zoom }, indexGallery) => {
          return (
            <Image
              key={indexGallery}
              className="SmartLinks-img"
              src={img.url}
              alt={img?.alternativeText || "Image"}
              width={500}
              height={500}
              onClick={() => openLightboxOnSlide(indexGallery + 1)}
            />
          );
        })}
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={images}
          slide={lightboxController.slide}
          type="image"
        />
      </div>
    </div>
  );
};
