export const length = (formattedString: string) => {
  if (typeof formattedString !== 'string') {
    return undefined;
  }

  return formattedString.replace(/\u001b\[\d+m/g, '').length;
};

export const padCenter = (
  formattedString: string,
  padLength: number,
  padCharacter = ' ',
) => {
  const formattedStringLength = length(formattedString);
  const leftPad = Math.floor(padLength / 2 - formattedStringLength / 2);
  const rightPad = Math.floor(padLength / 2 - formattedStringLength / 2);

  if (formattedStringLength >= padLength) {
    return formattedString;
  }

  return (
    padCharacter.repeat(leftPad) +
    formattedString +
    padCharacter.repeat(rightPad)
  );
};

export const padEnd = (
  formattedString: string,
  padLength: number,
  padCharacter = ' ',
) => {
  const formattedStringLength = length(formattedString);

  if (formattedStringLength >= padLength) {
    return formattedString;
  }

  return (
    formattedString + padCharacter.repeat(padLength - formattedStringLength)
  );
};

export const padStart = (
  formattedString: string,
  padLength: number,
  padCharacter = ' ',
) => {
  const formattedStringLength = length(formattedString);

  if (formattedStringLength >= padLength) {
    return formattedString;
  }

  return (
    padCharacter.repeat(padLength - formattedStringLength) + formattedString
  );
};
