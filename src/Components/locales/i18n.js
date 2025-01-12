import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './en/translation.json';
import translationAR from './ar/translation.json';
import translationSP from './sp/translation.json';
import translationFR from './fr/translation.json';


const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    },
    fr: {
        translation: translationFR
    },
    sp: {
        translation: translationSP
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
