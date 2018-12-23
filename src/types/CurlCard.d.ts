export enum Color {
  black = 'black',
  blue = 'blue',
  blueBright = 'blueBright',
  cyan = 'cyan',
  cyanBright = 'cyanBright',
  gray = 'gray',
  green = 'green',
  greenBright = 'greenBright',
  magenta = 'magenta',
  magentaBright = 'magentaBright',
  red = 'red',
  redBright = 'redBright',
  white = 'white',
  whiteBright = 'whiteBright',
  yellow = 'yellow',
  yellowBright = 'yellowBright',
}

export interface IDataTheme {
  background: Color;
  foreground: Color;
}

export interface ICardInfo {
  github?: string;
  headline?: string;
  instagram?: string;
  name: string;
  npm?: string;
  twitter?: string;
  website?: string;
}

export interface IOptions {
  information: ICardInfo;
  port?: number;
}
