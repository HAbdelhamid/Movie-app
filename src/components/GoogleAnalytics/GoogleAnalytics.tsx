import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

// @ts-ignore
const addPageView = (url) => {
  // @ts-ignore
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

const GoogleAnalytics = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      addPageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
