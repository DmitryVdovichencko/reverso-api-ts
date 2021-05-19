interface Options {
  contextResults: boolean;
  languageDetection: boolean;
  origin: string;
  sentenceSplitter: boolean;
}

export interface RequestBody {
  format: string;
  from: string;
  to: string;
  input: string;
  options: Options;
}
