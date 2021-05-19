import axios, { AxiosRequestConfig } from 'axios';
import { RequestBody } from './interfaces/translate';
import { ReversoParameters } from './interfaces/parameters';

export interface UserReversoParams {
  text: string;
  from: string;
  to: string;
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
    translation: 'https://api.reverso.net/translate/v1/translation',
  },
};
class Reverso {
  reversoParams: ReversoParameters;

  to: string;

  from: string;

  text: string;

  constructor(params: UserReversoParams) {
    this.from = params.from;
    this.to = params.to;
    this.text = params.text;
    this.reversoParams = reversoParameters;
  }

  checkLanguages(): boolean {
    return [this.from, this.to].every((usrLang) => (
      this.reversoParams.languages.some((lang) => lang.shortTitle === usrLang)));
  }

  checkParams(): boolean {
    return this.checkLanguages();
  }

  async translate():Promise<any> {
    const requestBody: RequestBody = {
      format: 'text',
      from: this.from,
      input: this.text,
      options: {
        contextResults: true,
        languageDetection: true,
        origin: 'reversomobile',
        sentenceSplitter: false,
      },
      to: this.to,
    };
    const translateRequestConfig: AxiosRequestConfig = {
      ...requestBody,
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        Connection: 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36',
      },
    };
    return axios.post(this.reversoParams.urls.translation, translateRequestConfig);
  }
}

export default Reverso;
