import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const styles = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3vmin",
    color: 'white',
  };

  return (
    <>
      {isMobile ? (
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      ) : (
        <div style={styles}>
          Пожалуйста, откройте через мобильное устройство
        </div>
      )}
    </>
  );
}