import ar from './ar';
import de from './de';
import en from './en';
import es from './es';
import fa from './fa';
import fr from './fr';
import hi from './hi';
import id from './id';
import it from './it';
import ja from './ja';
import ko from './ko';
import nl from './nl';
import pl from './pl';
import pt from './pt';
import ru from './ru';
import th from './th';
import tr from './tr';
import vi from './vi';
import zh from './zh';

export const translations = { ar, de, en, es, fa, fr, hi, id, it, ja, ko, nl, pl, pt, ru, th, tr, vi, zh };

export const languages = {
    ar: { code: 'ar', name: 'العربية', dir: 'rtl', fontFamily: "'Tajawal', 'Noto Sans', sans-serif" },
    en: { code: 'en', name: 'English', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    es: { code: 'es', name: 'Español', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    fr: { code: 'fr', name: 'Français', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    de: { code: 'de', name: 'Deutsch', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    pt: { code: 'pt', name: 'Português', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    it: { code: 'it', name: 'Italiano', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    hi: { code: 'hi', name: 'हिन्दी', dir: 'ltr', fontFamily: "'Noto Sans Devanagari', sans-serif" },
    id: { code: 'id', name: 'Bahasa Indonesia', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    ru: { code: 'ru', name: 'Русский', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    ja: { code: 'ja', name: '日本語', dir: 'ltr', fontFamily: "'Noto Sans JP', sans-serif" },
    zh: { code: 'zh', name: '中文', dir: 'ltr', fontFamily: "'Noto Sans SC', sans-serif" },
    pl: { code: 'pl', name: 'Polski', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    fa: { code: 'fa', name: 'فارسی', dir: 'rtl', fontFamily: "'Tajawal', 'Noto Sans', sans-serif" },
    nl: { code: 'nl', name: 'Nederlands', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    ko: { code: 'ko', name: '한국어', dir: 'ltr', fontFamily: "'Noto Sans KR', sans-serif" },
    th: { code: 'th', name: 'ไทย', dir: 'ltr', fontFamily: "'Noto Sans Thai', sans-serif" },
    tr: { code: 'tr', name: 'Türkçe', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
    vi: { code: 'vi', name: 'Tiếng Việt', dir: 'ltr', fontFamily: "'Noto Sans', sans-serif" },
};
