"use client";

import { useState } from "react";

import SelectMenu from "@/components/SelectMenu";

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

import { Plus } from "lucide-react";

import { passwordTypes } from "@/data/passwordTypes";
import { passwordTypeStates } from "@/data/passwordTypeStates";
import { formTypes } from "@/data/formTypes";

function AddNewPasswordDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [newPassword, setNewPassword] = useState({
    passwordType: "webLogin",
    ...passwordTypeStates.webLogin,
  });

  return (
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
            Yeni bir şifre oluşturmak için gerekli bilgileri girin ve kaydedin.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={
            step === 1
              ? (e) => {
                  e.preventDefault();
                  setStep(2);
                }
              : null
          }
        >
          {step === 1 && (
            <>
              <SelectMenu
                value={newPassword.passwordType}
                passwordTypes={passwordTypes}
                onValueChange={(string) => {
                  setNewPassword({
                    ...passwordTypeStates[string],
                    passwordType: string,
                  });
                }}
              />
              <div className="grid w-full gap-y-1.5 pt-4">
                <Label htmlFor="passwordTitle">Başlık</Label>
                <Input
                  type="text"
                  id="passwordTitle"
                  placeholder="Başlık giriniz"
                  autoComplete="off"
                  required
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
            <Button type="submit">{step === 1 ? "İleri" : "Kaydet"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewPasswordDialog;
