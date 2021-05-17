export interface Language {
  title:string,
  shortTitle:string
}

export interface Urls {
  contextTranslation: string,
  spellCheck: string,
  synonyms: string,
  translation: string,
}

export interface ReversoParameters {
  languages:Array<Language>,
  urls:Urls
}

const reversoParameters: ReversoParameters = {
  languages: [
    {
      title: 'english',
      shortTitle: 'en',
    },
    {
      title: 'russian',
      shortTitle: 'ru',
    },
  ],
  urls: {
    contextTranslation: 'https://context.reverso.net/translation/',
    spellCheck: 'https://orthographe.reverso.net/api/v1/Spelling',
    synonyms: 'https://synonyms.reverso.net/synonym/',
    translation: 'https://api.reverso.net/translate/v1/translation',
  },
};

export { reversoParameters };
