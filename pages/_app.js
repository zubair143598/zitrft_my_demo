import { useEffect } from "react";
import { useRouter } from "next/router";
import store from "@/src/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { appWithTranslation } from "next-i18next";
import i18n from "@/components/I18n/I18n";
import "@/styles/globals.scss";

const queryClient = new QueryClient();

const App=({ Component, pageProps }) =>{
  const router = useRouter();

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
    } else {
      const detectedLanguage = navigator.language.split("-")[0];
      const supportedLanguages = [
        "en",
        "ur",
        "fr",
        "it",
        "gr",
        "es",
        "po",
        "ne",
        "no",
        "da",
        "sv",
        "pol",
        "bu",
        "cz",
        "tu",
        "ar",
        "ca",
        "is",
        "ja",
        "so",
        "th",
        "ph",
        "hi",
      ];
      if (supportedLanguages.includes(detectedLanguage)) {
        i18n.changeLanguage(detectedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      window.scrollTo(0, 0);
    });
    return () => {
      router.events.off("routeChangeComplete");
    };
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
export default appWithTranslation(App);