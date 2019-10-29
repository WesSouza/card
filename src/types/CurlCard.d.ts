export interface BoxParams {
  content: string;
  frame?: number;
  frames?: number;
}

export interface CardInfo {
  github?: string;
  headline?: string;
  instagram?: string;
  name: string;
  npm?: string;
  twitter?: string;
  website?: string;
}

export interface Options {
  information: CardInfo;
  port?: number;
}
