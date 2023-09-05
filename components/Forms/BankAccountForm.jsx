import { useContext } from "react";

import { NewPasswordContext } from "@/components/Dialogs/PasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useTranslation } from "react-i18next";

function BankAccountForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { t } = useTranslation();

  const handleIbanChange = (e) => {
    e.preventDefault();

    let formattedIban = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    formattedIban = formattedIban.slice(0, 26);

    let formattedDisplay = t("dashboard.bank_account_form.iban_placeholder");

    for (let i = 2; i < formattedIban.length; i += 4) {
      formattedDisplay += " " + formattedIban.slice(i, i + 4);
    }

    setNewPassword({ ...newPassword, iban: formattedDisplay });
  };

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="iban">
          {t("dashboard.bank_account_form.iban_label")}
        </Label>
        <Input
          type="text"
          id="iban"
          placeholder={t("dashboard.bank_account_form.iban_placeholder")}
          autoComplete="off"
          spellCheck="false"
          required
          value={newPassword.iban}
          onChange={handleIbanChange}
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="fullName">
          {t("dashboard.bank_account_form.full_name_label")}
        </Label>
        <Input
          type="text"
          id="fullName"
          placeholder={t("dashboard.bank_account_form.full_name_placeholder")}
          autoComplete="off"
          spellCheck="false"
          required
          value={newPassword.fullName}
          onChange={(e) =>
            setNewPassword({ ...newPassword, fullName: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default BankAccountForm;
