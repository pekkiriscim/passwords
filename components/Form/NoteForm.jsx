import { useContext } from "react";

import { NewPasswordContext } from "@/components/Dialog/PasswordDialog";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function NoteForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="note">Not</Label>
        <Textarea
          id="note"
          placeholder="Not giriniz"
          autoComplete="off"
          required
          value={newPassword.note}
          onChange={(e) => {
            e.preventDefault();

            setNewPassword({
              ...newPassword,
              note: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
}

export default NoteForm;
