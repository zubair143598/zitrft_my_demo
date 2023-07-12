import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from '../../locales/en.json';
import cz from '../../locales/cz.json';
import ur from '../../locales/ur.json';
import fr from '../../locales/fr.json';
import it from '../../locales/it.json';
import gr from '../../locales/gr.json';
import es from '../../locales/es.json';
import po from '../../locales/po.json';
import ne from '../../locales/ne.json';
import no from '../../locales/no.json';
import da from '../../locales/da.json';
import sv from '../../locales/sv.json';
import pol from '../../locales/pol.json';
import bu from '../../locales/bu.json';
import tu from '../../locales/tu.json';
import ar from '../../locales/ar.json';
import ca from '../../locales/ca.json';
import is from '../../locales/is.json';
import ja from '../../locales/ja.json';
import so from '../../locales/so.json';
import th from '../../locales/th.json';
import ph from '../../locales/ph.json';
import hi from '../../locales/hi.json';



const resources = {
    en: { translation: en },
    ur: { translation: ur },
    fr: { translation: fr },
    it: { translation: it },
    gr: { translation: gr },
    es: { translation: es },
    po: { translation: po },
    ne: { translation: ne },
    no: { translation: no },
    da: { translation: da },
    sv: { translation: sv },
    pol: { translation: pol },
    bu: { translation: bu },
    cz: { translation: cz },
    tu: { translation: tu },
    ar: { translation: ar },
    ca: { translation: ca },
    is: { translation: is },
    ja: { translation: ja },
    so: { translation: so },
    th: { translation: th },
    ph: { translation: ph },
    hi: { translation: hi },


  };
  console.log(fr)

  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
