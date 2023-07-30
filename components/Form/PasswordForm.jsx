import { useContext } from "react";

import SelectMenu from "@/components/SelectMenu";

import { NewPasswordContext } from "@/components/Dialog/PasswordDialog";

import { Label } from "@/components//ui/label";
import { Input } from "@/components//ui/input";

import { passwordTypes } from "@/data/passwordTypes";
import { passwordTypeStates } from "@/data/passwordTypeStates";

function PasswordForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  return (
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
  );
}

export default PasswordForm;
