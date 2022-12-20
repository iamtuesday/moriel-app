import Head from "next/head";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Favicon } from "../components/globals";
import { GeneralsProvider } from "../context/generals.context";
import { NavbarProvider } from "../context/navbar.context";
import { Layout } from "../components/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tuesday</title>
        <Favicon />
      </Head>
      <GeneralsProvider generals={pageProps.generals}>
        <NavbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavbarProvider>
      </GeneralsProvider>

    </>
  )
}
