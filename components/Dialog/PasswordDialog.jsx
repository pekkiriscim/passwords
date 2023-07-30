"use client";

import { useState, createContext, useContext, useEffect } from "react";

import { PasswordsContext, AuthContext } from "@/app/page";
import { PasswordDialogContext } from "@/components/Page/Dashboard";

import PasswordForm from "@/components/Form/PasswordForm";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus, Loader2 } from "lucide-react";

import { passwordTypeStates } from "@/data/passwordTypeStates";
import { formTypes } from "@/data/formTypes";

import { updatePassword } from "@/utils/updatePassword";
import { addNewPassword } from "@/utils/addNewPassword";

export const NewPasswordContext = createContext();

function PasswordDialog() {
  const [newPassword, setNewPassword] = useState();

  const { auth } = useContext(AuthContext);
  const { passwords, setPasswords } = useContext(PasswordsContext);

  const { passwordDialog, setPasswordDialog } = useContext(
    PasswordDialogContext
  );

  useEffect(() => {
    if (passwordDialog.isUpdating) {
      setNewPassword(passwordDialog.updatePassword);

      setPasswordDialog({ ...passwordDialog, step: 2 });
    } else {
      setNewPassword(passwordTypeStates.webLogin);

      setPasswordDialog({ ...passwordDialog, step: 1 });
    }
  }, [passwordDialog.isUpdating, passwordDialog.updatePassword]);

  const handleStep1 = (e) => {
    e.preventDefault();

    setPasswordDialog({ ...passwordDialog, step: 1 });
  };

  const handleStep2 = (e) => {
    e.preventDefault();

    setPasswordDialog({ ...passwordDialog, step: 2 });
  };

  const openDialog = (e) => {
    e.preventDefault();

    setPasswordDialog({
      ...passwordDialog,
      isOpen: true,
      isUpdating: false,
      step: 1,
    });
  };

  const closeDialog = (e) => {
    e.preventDefault();

    if (passwordDialog.isUpdating) {
      setNewPassword(passwordDialog.updatePassword);

      setPasswordDialog({ ...passwordDialog, isUpdating: false });
    } else {
      setNewPassword(passwordTypeStates.webLogin);
    }

    setPasswordDialog({ ...passwordDialog, isOpen: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPasswordDialog({ ...passwordDialog, isLoading: true });

    if (passwordDialog.isUpdating) {
      const updatedPasswordsState = await updatePassword(
        passwords,
        passwordDialog.updatePassword,
        newPassword,
        auth
      );

      setPasswords(updatedPasswordsState);

      setNewPassword(passwordDialog.updatePassword);
    } else {
      const newPasswordsState = await addNewPassword(
        passwords,
        newPassword,
        auth
      );

      setPasswords(newPasswordsState);

      setPasswordDialog({ ...passwordDialog, step: 1 });

      setNewPassword(passwordTypeStates.webLogin);
    }

    setPasswordDialog({ ...passwordDialog, isOpen: false, isLoading: false });
  };

  return (
    <NewPasswordContext.Provider
      value={{ newPassword: newPassword, setNewPassword: setNewPassword }}
    >
      <Dialog open={passwordDialog.isOpen}>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="whitespace-nowrap"
            variant="default"
            onClick={openDialog}
          >
            <Plus className="mr-2 h-4 w-4" />
            Yeni Şifre Ekle
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {passwordDialog.isUpdating
                ? "Şifreyi Düzenle"
                : "Yeni Şifre Ekle"}
            </DialogTitle>
            <DialogDescription>
              {passwordDialog.isUpdating
                ? "Bu şifreyi düzenlemek için gerekli bilgileri girin ve kaydedin."
                : "Yeni bir şifre oluşturmak için gerekli bilgileri girin ve kaydedin."}
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={passwordDialog.step === 1 ? handleStep2 : handleSubmit}
          >
            <fieldset disabled={passwordDialog.isLoading}>
              {passwordDialog.step === 1 && <PasswordForm />}
              {passwordDialog.step === 2 &&
                newPassword.passwordType &&
                formTypes[newPassword.passwordType]}
              <div className="grid grid-cols-2 gap-x-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={
                    passwordDialog.isUpdating
                      ? closeDialog
                      : passwordDialog.step === 2
                      ? handleStep1
                      : closeDialog
                  }
                >
                  {passwordDialog.isUpdating || passwordDialog.step === 1
                    ? "İptal"
                    : "Geri"}
                </Button>
                <Button type="submit">
                  {passwordDialog.isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : passwordDialog.isUpdating || passwordDialog.step === 2 ? (
                    "Kaydet"
                  ) : (
                    "İleri"
                  )}
                </Button>
              </div>
            </fieldset>
            <pre>{JSON.stringify(newPassword, null, 2)}</pre>
          </form>
        </DialogContent>
      </Dialog>
    </NewPasswordContext.Provider>
  );
}

export default PasswordDialog;