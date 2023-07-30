"use client";

import { useState, createContext, useContext, useEffect } from "react";

import PasswordForm from "@/components/Form/PasswordForm";

import { PasswordsContext, AuthContext } from "@/app/page";

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

function PasswordDialog({ isEditing, password }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState();
  const [newPassword, setNewPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { passwords, setPasswords } = useContext(PasswordsContext);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (isEditing) {
      setStep(2);
      setNewPassword(password);
    } else {
      setStep(1);
      setNewPassword(passwordTypeStates.webLogin);
    }
  }, [isEditing, password]);

  const handleStep1 = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleStep2 = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const openDialog = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  const closeDialog = (e) => {
    e.preventDefault();
    setIsDialogOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (isEditing) {
      const updatedPasswordsState = await updatePassword(
        passwords,
        password,
        newPassword,
        auth
      );

      setPasswords(updatedPasswordsState);
      setNewPassword(password);
    } else {
      const newPasswordsState = await addNewPassword(
        passwords,
        newPassword,
        auth
      );

      setPasswords(newPasswordsState);
      setStep(1);
      setNewPassword(passwordTypeStates.webLogin);
    }

    setIsDialogOpen(false);
    setIsLoading(false);
  };

  return (
    <NewPasswordContext.Provider
      value={{ newPassword: newPassword, setNewPassword: setNewPassword }}
    >
      <Dialog open={isDialogOpen}>
        <DialogTrigger asChild>
          <Button
            type="button"
            className={`whitespace-nowrap ${isEditing ? "rounded-xsm" : ""}`}
            variant={isEditing ? "secondary" : "default"}
            onClick={openDialog}
          >
            {isEditing ? (
              "Düzenle"
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Yeni Şifre Ekle
              </>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Şifreyi Düzenle" : "Yeni Şifre Ekle"}
            </DialogTitle>
            <DialogDescription>
              {isEditing
                ? "Bu şifreyi düzenlemek için gerekli bilgileri girin ve kaydedin."
                : "Yeni bir şifre oluşturmak için gerekli bilgileri girin ve kaydedin."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={step === 1 ? handleStep2 : handleSubmit}>
            <fieldset disabled={isLoading}>
              {step === 1 && <PasswordForm />}
              {step === 2 &&
                newPassword.passwordType &&
                formTypes[newPassword.passwordType]}
              <div className="grid grid-cols-2 gap-x-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={isEditing || step === 1 ? closeDialog : handleStep1}
                >
                  {isEditing || step === 1 ? "İptal" : "Geri"}
                </Button>
                <Button type="submit">
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : isEditing || step === 2 ? (
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
