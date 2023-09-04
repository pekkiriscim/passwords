import { useState, useContext } from "react";

import { PasswordsContext, AuthContext } from "@/app/page";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Loader2 } from "lucide-react";

import { savePasswords } from "@/utils/savePasswords";

import { useTranslation } from "react-i18next";

function DeletePasswordDialog({ passwordId }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { passwords, setPasswords } = useContext(PasswordsContext);
  const { auth } = useContext(AuthContext);

  const deletePassword = async (e) => {
    try {
      e.preventDefault();

      setIsLoading(true);

      const newPasswords = await passwords.filter(
        (password) => password.passwordId !== passwordId
      );

      const newPasswordsState = await savePasswords(
        newPasswords,
        auth.email,
        auth.password
      );

      if (newPasswordsState) {
        setPasswords(newPasswordsState);

        setIsDialogOpen(false);
      }
    } catch (error) {
      console.log(error);

      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const { t } = useTranslation();

  return (
    <Dialog open={isDialogOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="whitespace-nowrap rounded-xsm"
          onClick={(e) => {
            e.preventDefault();

            setIsDialogOpen(true);
          }}
        >
          {t("dashboard.delete_password_dialog.delete_button")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {t("dashboard.delete_password_dialog.dialog_title_delete")}
          </DialogTitle>
          <DialogDescription>
            {t("dashboard.delete_password_dialog.dialog_description_delete")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-x-3 pt-4">
          <Button
            type="button"
            variant="outline"
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();

              setIsDialogOpen(false);
            }}
          >
            {t("dashboard.delete_password_dialog.dialog_cancel_button")}
          </Button>
          <Button
            type="button"
            variant="destructive"
            disabled={isLoading}
            onClick={deletePassword}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              t("dashboard.delete_password_dialog.dialog_delete_button")
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeletePasswordDialog;
