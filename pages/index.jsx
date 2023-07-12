import Hero from "@/components/hero/Hero";
import CountresTrans from "@/components/countries-language/CountresTrans";
import Head from "next/head";
import Heero from "@/components/Hero"
import Countries from "@/components/countries-language/Countries";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
export default function Home() {

  const { t, i18n } = useTranslation();
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);
  const getTextAlign = () => {
    return i18n.language === "ur"  ? "text-right " : "text-left";
  };
  console.log(t('translation.greeting'))

  return (
    <>
      <Head>
        <title>ZTFR</title>
      </Head>

      <main className="overflow-hidden">
      {isContentVisible && (
          <>
        <Countries/>
        <Hero/>
       
          </>
        )}
    
        {/* <Heero/> */}
      </main>
    </>
  );
}
