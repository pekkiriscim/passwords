"use client";

import { useState, createContext, useContext, useEffect } from "react";

import { PasswordsContext, AuthContext } from "@/app/page";
import { PasswordDialogContext } from "@/components/Pages/Dashboard";

import PasswordForm from "@/components/Forms/PasswordForm";

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

import { passwordTypeStates } from "@/constants/componentMappings";
import { formComponents } from "@/constants/componentMappings";

import { updatePassword } from "@/utils/updatePassword";
import { addNewPassword } from "@/utils/addNewPassword";

import { useTranslation } from "react-i18next";

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
    try {
      e.preventDefault();

      setPasswordDialog({ ...passwordDialog, isLoading: true });

      if (passwordDialog.isUpdating) {
        const updatedPasswordsState = await updatePassword(
          passwords,
          passwordDialog.updatePassword,
          newPassword,
          auth
        );

        if (updatedPasswordsState) {
          setPasswords(updatedPasswordsState);

          setNewPassword(passwordDialog.updatePassword);
        }
      } else {
        const newPasswordsState = await addNewPassword(
          passwords,
          newPassword,
          auth
        );

        if (newPasswordsState) {
          setPasswords(newPasswordsState);

          setPasswordDialog({ ...passwordDialog, step: 1 });

          setNewPassword(passwordTypeStates.webLogin);
        }
      }
    } catch (error) {
      console.log(error);

      return null;
    } finally {
      setPasswordDialog({ ...passwordDialog, isOpen: false, isLoading: false });
    }
  };

  const { t } = useTranslation();

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
            {t("dashboard.password_dialog.add_new_password_button")}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {passwordDialog.isUpdating
                ? t("dashboard.password_dialog.dialog_title_edit")
                : t("dashboard.password_dialog.dialog_title_add")}
            </DialogTitle>
            <DialogDescription>
              {passwordDialog.isUpdating
                ? t("dashboard.password_dialog.dialog_description_edit")
                : t("dashboard.password_dialog.dialog_description_add")}
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={passwordDialog.step === 1 ? handleStep2 : handleSubmit}
          >
            <fieldset disabled={passwordDialog.isLoading}>
              {passwordDialog.step === 1 && <PasswordForm />}
              {passwordDialog.step === 2 &&
                newPassword.passwordType &&
                formComponents[newPassword.passwordType]}
              <div className="grid grid-cols-2 gap-x-3 pt-4">
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
                    ? t("dashboard.password_dialog.dialog_cancel_button")
                    : t("dashboard.password_dialog.dialog_back_button")}
                </Button>
                <Button type="submit">
                  {passwordDialog.isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : passwordDialog.isUpdating || passwordDialog.step === 2 ? (
                    t("dashboard.password_dialog.dialog_save_button")
                  ) : (
                    t("dashboard.password_dialog.dialog_next_button")
                  )}
                </Button>
              </div>
            </fieldset>
          </form>
        </DialogContent>
      </Dialog>
    </NewPasswordContext.Provider>
  );
}

export default PasswordDialog;
