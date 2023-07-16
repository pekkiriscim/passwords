import { useState } from "react";

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

function EditPasswordDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Dialog open={isDialogOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="secondary"
          className="whitespace-nowrap rounded-xsm"
          onClick={(e) => {
            e.preventDefault();

            setIsDialogOpen(true);
          }}
        >
          Düzenle
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Şifreyi Düzenle</DialogTitle>
          <DialogDescription>
            Bu şifreyi düzenlemek için gerekli bilgileri girin ve kaydedin.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-x-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();

              setIsDialogOpen(false);
            }}
          >
            İptal
          </Button>
          <Button type="submit">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Kaydet"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditPasswordDialog;
