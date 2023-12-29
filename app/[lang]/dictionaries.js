import 'server-only'
 
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  tr: () => import('./dictionaries/tr.json').then((module) => module.default),
 

}
 
export const getDictionary = async (locale) => {
  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Dil paketi yüklenirken bir hata oluştu: ${error}`);
    return {}; // Veya başka bir varsayılan değer
  }
}