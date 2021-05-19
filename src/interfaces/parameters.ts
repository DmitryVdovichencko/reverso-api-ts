export interface Language {
  title:string,
  shortTitle:string
}

export interface Urls {
  translation: string,
}

export interface ReversoParameters {
  languages:Array<Language>,
  urls:Urls
}
