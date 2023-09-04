import { useContext } from "react";

import { NewPasswordContext } from "@/components/Dialogs/PasswordDialog";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { useTranslation } from "react-i18next";

function NoteForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { t } = useTranslation();

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="note">{t("dashboard.note_form.note_label")}</Label>
        <Textarea
          id="note"
          placeholder={t("dashboard.note_form.note_placeholder")}
          autoComplete="off"
          required
          value={newPassword.note}
          onChange={(e) =>
            setNewPassword({ ...newPassword, note: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default NoteForm;
