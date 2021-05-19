import axios from 'axios';
import { RequestBody } from './interfaces/translate';
import { ReversoParameters } from './interfaces/parameters';

export interface UserReversoParams {
  text: string,
  from: string,
  to: string,
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

  checkLanguages():boolean {
    return this.reversoParams.languages.some((lang) => lang.shortTitle === this.from);
  }

  checkParams():boolean {
    return this.checkLanguages();
  }
}

export default Reverso;
