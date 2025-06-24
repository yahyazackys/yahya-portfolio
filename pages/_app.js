import "../styles/globals.css";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Yahya Zacky Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Yahya Zacky – Full-stack web & mobile developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0f172a" />
        <meta property="og:title" content="Yahya Zacky Portfolio" />
        <meta
          property="og:description"
          content="Showcasing projects, skills, and experience in full-stack development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/yahyaportfolio.png" />
        <meta
          property="og:url"
          content="https://dazzling-radiance.up.railway.app"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            {/* <Transition /> */}
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
