export interface IBoxParams {
  content: string;
  frame?: number;
  frames?: number;
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
