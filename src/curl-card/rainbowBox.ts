import chalk from 'chalk';

import { IBoxParams } from '../types/CurlCard';
import { length, padEnd } from '../utils/formattedString';

enum Border {
  'BL' = '┗',
  'BR' = '┛',
  'H' = '━',
  'TL' = '┏',
  'TR' = '┓',
  'V' = '┃',
}

const PaddingHorizontal = 4;
const PaddingVertical = 1;

const newMatrix = (x: number, y: number): number[][] =>
  Array.from<number>({ length: y }).map(() =>
    Array.from<number>({ length: x }).fill(0),
  );

const rainbowBox = ({ content, frame = 0, frames = 1 }: IBoxParams) => {
  const lines = content.split(/\r?\n/);
  const linesLenghts = lines.map(line => length(line));
  const boxContentWidth = Math.max(...linesLenghts);
  const boxWidth = 2 * PaddingHorizontal + boxContentWidth + 2;
  const boxHeight = 2 * PaddingVertical + lines.length + 2;

  const perimeter = 2 * (boxHeight - 2) + 2 * boxWidth;

  const borderColorHues = newMatrix(boxWidth, boxHeight);

  const perimeterTop = boxWidth;
  const perimeterRight = perimeterTop + boxHeight - 1;
  const perimeterBottom = perimeterRight + boxWidth - 1;

  for (let i = 0; i < perimeter; i++) {
    // Top border
    if (i < perimeterTop) {
      const x = 0;
      const y = i;
      borderColorHues[x][y] = (i * 360) / perimeter;
    }

    // Right border
    else if (i < perimeterRight) {
      const x = i - (boxWidth - 1);
      const y = boxWidth - 1;
      borderColorHues[x][y] = (i * 360) / perimeter;
    }

    // Bottom border
    else if (i < perimeterBottom) {
      const x = boxHeight - 1;
      const y = boxWidth - 1 - (i - perimeterRight);
      borderColorHues[x][y] = (i * 360) / perimeter;
    }

    // Left border
    else {
      const x = boxHeight - 2 - (i - perimeterBottom);
      const y = 0;
      borderColorHues[x][y] = (i * 360) / perimeter;
    }
  }

  let result = '';

  for (let i = 0; i < boxWidth; i++) {
    let borderChar;
    if (i === 0) {
      borderChar = Border.TL;
    } else if (i < boxWidth - 1) {
      borderChar = Border.H;
    } else {
      borderChar = Border.TR;
    }
    result += chalk.hsl(borderColorHues[0][i], 100, 50)(borderChar);
  }

  result += '\n';

  for (let i = 0; i < PaddingVertical; i++) {
    const boxColorHueLine = i + 1;
    result +=
      chalk.hsl(borderColorHues[boxColorHueLine][0], 100, 50)(Border.V) +
      ' '.repeat(boxWidth - 2) +
      chalk.hsl(borderColorHues[boxColorHueLine][boxWidth - 1], 100, 50)(
        Border.V,
      ) +
      '\n';
  }

  lines.forEach((line, i) => {
    const boxColorHueLine = i + 1 + PaddingVertical;
    result +=
      chalk.hsl(borderColorHues[boxColorHueLine][0], 100, 50)(Border.V) +
      ' '.repeat(PaddingHorizontal) +
      padEnd(line, boxContentWidth) +
      ' '.repeat(PaddingHorizontal) +
      chalk.hsl(borderColorHues[boxColorHueLine][boxWidth - 1], 100, 50)(
        Border.V,
      ) +
      '\n';
  });

  for (let i = 0; i < PaddingVertical; i++) {
    const boxColorHueLine = i + lines.length + 1;
    result +=
      chalk.hsl(borderColorHues[boxColorHueLine][0], 100, 50)(Border.V) +
      ' '.repeat(boxWidth - 2) +
      chalk.hsl(borderColorHues[boxColorHueLine][boxWidth - 1], 100, 50)(
        Border.V,
      ) +
      '\n';
  }

  for (let i = 0; i < boxWidth; i++) {
    let borderChar;
    if (i === 0) {
      borderChar = Border.BL;
    } else if (i < boxWidth - 1) {
      borderChar = Border.H;
    } else {
      borderChar = Border.BR;
    }
    result += chalk.hsl(borderColorHues[boxHeight - 1][i], 100, 50)(borderChar);
  }

  return result;
};

export default rainbowBox;
