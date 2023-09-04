import { writeTextFile, readTextFile } from "@tauri-apps/api/fs";

import SHA256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import encUTF8 from "crypto-js/enc-utf8";

import { file_path, file_extension } from "@/passwords.config";

export const savePasswords = async (newPasswords, email, password) => {
  try {
    const fileName = SHA256(email + password).toString();
    const filePath = file_path;
    const fileExtension = file_extension;

    const fileNameWithExtension = `${fileName}.${fileExtension}`;

    const encryptedContent = AES.encrypt(
      JSON.stringify(newPasswords),
      email + password
    ).toString();

    await writeTextFile(fileNameWithExtension, encryptedContent, {
      dir: filePath,
    });

    const fileContent = await readTextFile(fileNameWithExtension, {
      dir: filePath,
    });

    const decryptedContent = AES.decrypt(
      fileContent,
      email + password
    ).toString(encUTF8);

    const parsedContent = JSON.parse(decryptedContent);

    return parsedContent;
  } catch (error) {
    console.log(error);

    return null;
  }
};
