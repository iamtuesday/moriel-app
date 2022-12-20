import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { SmartLinks } from "../components/organisms";
import { getGenerals } from "../lib/getGenerals";
import { baseApi } from "../lib/baseApi";
import { SmartLink, SmartLinkData } from "../interfaces";

interface HomeProps {
  smartLink: SmartLinkData;
}

const Home: NextPage<HomeProps> = ({ smartLink }) => {
  console.log(smartLink);
  return (
    <div className="min-h-screen">
      <SmartLinks
        appearance={smartLink.appearance}
        tab={smartLink.tab}
        socials={smartLink.buttons}
        gallery={smartLink.gallery}
      />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals();

  const [{ data: smartLink }] = await Promise.all([
    baseApi.get<SmartLink>("/smart-link?populate=deep"),
  ]);

  return {
    props: {
      smartLink: smartLink.data,
      // forms: forms.data,
      // services: services.data.section,
      generals,
    },
    revalidate: 1,
  };
};
