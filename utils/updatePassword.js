import { savePasswords } from "@/utils/savePasswords";

export async function updatePassword(passwords, password, newPassword, auth) {
  try {
    const updatedPasswords = [...passwords];

    const index = updatedPasswords.findIndex(
      (obj) => obj.passwordId === password.passwordId
    );

    if (index !== -1) {
      updatedPasswords[index] = newPassword;

      const updatedPasswordsState = await savePasswords(
        updatedPasswords,
        auth.email,
        auth.password
      );

      if (updatedPasswordsState) {
        return updatedPasswordsState;
      }
    }
  } catch (error) {
    console.log(error);

    return null;
  }
}
