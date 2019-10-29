import chalk from 'chalk';

import { CardInfo } from '../types/CurlCard';
import { length, padCenter, padStart, padEnd } from '../utils/formattedString';

const cardInformationFormat = ({
  github,
  headline,
  instagram,
  name,
  npm,
  twitter,
  website,
}: CardInfo) => {
  const highlightFormat = chalk.bold.cyan;
  const labelFormat = chalk.magenta;
  const textFormat = chalk.black;
  const linkFormat = chalk.underline.gray;
  const linkHighlightFormat = chalk.underline.black;

  const lines = [];
  const table: [string, string, string][] = [];

  lines.push(highlightFormat(name));

  if (headline) {
    lines.push(textFormat(headline));
  }

  lines.push('');

  if (github) {
    table.push(['GitHub', 'https://github.com/', github]);
  }

  if (instagram) {
    table.push(['Instagram', 'https://instagram.com/', instagram]);
  }

  if (npm) {
    table.push(['npm', 'https://npmjs.com/~', npm]);
  }

  if (twitter) {
    table.push(['Twitter', 'https://mobile.twitter.com/', twitter]);
  }

  if (website) {
    table.push(['Website', '', website]);
  }

  const labelLengths: number[] = [];
  const linkLengths: number[] = [];
  table.forEach(([label, link, linkHighlight]) => {
    labelLengths.push(length(label));
    linkLengths.push(length(link) + length(linkHighlight));
  });
  const maxLabelLength = Math.max(...labelLengths);
  const maxLinkLength = Math.max(...linkLengths);

  table.forEach(([label, link, linkHighlight]) => {
    lines.push(
      labelFormat(padStart(label, maxLabelLength) + ': ') +
        padEnd(
          linkFormat(link) + linkHighlightFormat(linkHighlight),
          maxLinkLength,
        ),
    );
  });

  const linesLengths = lines.map(line => length(line));
  const maxLineLength = Math.max(...linesLengths);

  return lines.map(line => padCenter(line, maxLineLength)).join('\n');
};

export default cardInformationFormat;
