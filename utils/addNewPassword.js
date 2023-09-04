import { savePasswords } from "@/utils/savePasswords";

export async function addNewPassword(passwords, newPassword, auth) {
  try {
    const currentTimestamp = Date.now();

    const newPasswords = [
      ...passwords,
      { ...newPassword, passwordId: currentTimestamp },
    ];

    const newPasswordsState = await savePasswords(
      newPasswords,
      auth.email,
      auth.password
    );

    if (newPasswordsState) {
      return newPasswordsState;
    }
  } catch (error) {
    console.log(error);

    return null;
  }
}
