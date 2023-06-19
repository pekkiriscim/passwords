import { useContext } from "react";

import { NewPasswordContext } from "@/components/Dialog/AddNewPasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function BankAccountForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="iban">IBAN</Label>
        <Input
          type="text"
          id="iban"
          placeholder="TR"
          autoComplete="off"
          required
          value={newPassword.iban}
          onChange={(e) => {
            e.preventDefault();

            let formattedIban = e.target.value
              .toUpperCase()
              .replace(/[^A-Z0-9]/g, "");
            formattedIban = formattedIban.slice(0, 26);
            let formattedDisplay = "TR";
            for (let i = 2; i < formattedIban.length; i += 4) {
              formattedDisplay += " " + formattedIban.slice(i, i + 4);
            }

            setNewPassword({ ...newPassword, iban: formattedDisplay });
          }}
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="fullName">Ad Soyad</Label>
        <Input
          type="text"
          id="fullName"
          placeholder="Ad soyad giriniz"
          autoComplete="off"
          required
          value={newPassword.fullName}
          onChange={(e) => {
            e.preventDefault();

            setNewPassword({ ...newPassword, fullName: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default BankAccountForm;
