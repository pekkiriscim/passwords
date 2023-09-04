export const generatePassword = (generateSettings) => {
  const {
    length,
    includeUpperCase,
    includeLowerCase,
    includeDigits,
    includeSpecialChars,
  } = generateSettings;

  if (
    !includeUpperCase &&
    !includeLowerCase &&
    !includeDigits &&
    !includeSpecialChars
  ) {
    return null;
  }

  let charset = "";

  if (includeUpperCase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeLowerCase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeDigits) {
    charset += "0123456789";
  }

  if (includeSpecialChars) {
    charset += "!@#$%^&*()-_=+[{]}\\|;:',<.>/?";
  }

  let password = "";
  const charsetLength = charset.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);

    password += charset[randomIndex];
  }

  return password;
};
