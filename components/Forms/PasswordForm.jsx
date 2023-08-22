import { useContext } from "react";

import SelectMenu from "@/components/SelectMenu";

import { NewPasswordContext } from "@/components/Dialogs/PasswordDialog";

import { Label } from "@/components//ui/label";
import { Input } from "@/components//ui/input";

import { passwordTypeOptions } from "@/constants/componentMappings";
import { passwordTypeStates } from "@/constants/componentMappings";

import { useTranslation } from "react-i18next";

function PasswordForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { t } = useTranslation();

  return (
    <>
      <SelectMenu
        value={newPassword.passwordType}
        data={passwordTypeOptions}
        label={t("dashboard.password_form.password_type_label")}
        id={"passwordType"}
        placeholder={t("dashboard.password_form.password_type_placeholder")}
        onValueChange={(string) => {
          setNewPassword(passwordTypeStates[string]);
        }}
      />
      <div className="grid w-full gap-y-1.5 py-4">
        <Label htmlFor="passwordTitle">
          {t("dashboard.password_form.password_title_label")}
        </Label>
        <Input
          type="text"
          id="passwordTitle"
          placeholder={t("dashboard.password_form.password_title_placeholder")}
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
