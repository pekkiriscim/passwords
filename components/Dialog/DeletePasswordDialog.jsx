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

function DeletePasswordDialog({ passwordId }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { passwords, setPasswords } = useContext(PasswordsContext);
  const { auth } = useContext(AuthContext);

  const deletePassword = async (e) => {
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

    setIsLoading(false);
  };

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
          Sil
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Şifreyi Sil</DialogTitle>
          <DialogDescription>
            Bu şifreyi kalıcı olarak silmek istediğinizden emin misiniz?
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-x-2 pt-4">
          <Button
            type="button"
            variant="outline"
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();

              setIsDialogOpen(false);
            }}
          >
            İptal
          </Button>
          <Button
            type="button"
            variant="destructive"
            disabled={isLoading}
            onClick={deletePassword}
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sil"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeletePasswordDialog;
