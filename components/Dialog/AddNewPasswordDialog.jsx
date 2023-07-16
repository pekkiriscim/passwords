"use client";

import { useState, createContext, useContext } from "react";

import SelectMenu from "@/components/SelectMenu";

import { PasswordsContext, AuthContext } from "@/app/page";

import { Button } from "@/components/ui/button";
import { Label } from "@/components//ui/label";
import { Input } from "@/components//ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus, Loader2 } from "lucide-react";

import { passwordTypes } from "@/data/passwordTypes";
import { passwordTypeStates } from "@/data/passwordTypeStates";
import { formTypes } from "@/data/formTypes";

import { savePasswords } from "@/utils/savePasswords";

export const NewPasswordContext = createContext();

function AddNewPasswordDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [newPassword, setNewPassword] = useState(passwordTypeStates.webLogin);
  const [isLoading, setIsLoading] = useState(false);

  const { passwords, setPasswords } = useContext(PasswordsContext);
  const { auth } = useContext(AuthContext);

  const handleStep = (e) => {
    e.preventDefault();

    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

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
      setPasswords(newPasswordsState);

      setStep(1);
      setNewPassword(passwordTypeStates.webLogin);

      setIsDialogOpen(false);
    }

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
            className="whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();

              setIsDialogOpen(true);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Yeni Şifre Ekle
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yeni Şifre Ekle</DialogTitle>
            <DialogDescription>
              Yeni bir şifre oluşturmak için gerekli bilgileri girin ve
              kaydedin.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={step === 1 ? handleStep : handleSubmit}>
            <fieldset disabled={isLoading}>
              {step === 1 && (
                <>
                  <SelectMenu
                    value={newPassword.passwordType}
                    data={passwordTypes}
                    label={"Şifre Türü"}
                    id={"passwordType"}
                    placeholder={"Şifre türü seçiniz"}
                    onValueChange={(string) => {
                      setNewPassword(passwordTypeStates[string]);
                    }}
                  />
                  <div className="grid w-full gap-y-1.5 py-4">
                    <Label htmlFor="passwordTitle">Başlık</Label>
                    <Input
                      type="text"
                      id="passwordTitle"
                      placeholder="Başlık giriniz"
                      autoComplete="off"
                      required
                      value={newPassword.passwordTitle}
                      onChange={(e) => {
                        e.preventDefault();

                        setNewPassword({
                          ...newPassword,
                          passwordTitle: e.target.value,
                        });
                      }}
                    />
                  </div>
                </>
              )}
              {step === 2 &&
                newPassword.passwordType &&
                formTypes[newPassword.passwordType]}
              <div className="grid grid-cols-2 gap-x-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={
                    step === 1
                      ? (e) => {
                          e.preventDefault();

                          setIsDialogOpen(false);
                        }
                      : (e) => {
                          e.preventDefault();

                          setStep(1);
                        }
                  }
                >
                  {step === 1 ? "İptal" : "Geri"}
                </Button>
                <Button type="submit">
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : step === 1 ? (
                    "İleri"
                  ) : (
                    "Kaydet"
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

export default AddNewPasswordDialog;
