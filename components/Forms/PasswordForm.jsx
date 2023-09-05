import { useContext } from "react";

import SelectMenu from "@/components/SelectMenu";

import { NewPasswordContext } from "@/components/Dialogs/PasswordDialog";

import { Label } from "@/components//ui/label";
import { Input } from "@/components//ui/input";

import { passwordTypeStates } from "@/constants/componentMappings";

import { useTranslation } from "react-i18next";

function PasswordForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { t } = useTranslation();

  const passwordTypeOptions = [
    {
      value: "webLogin",
      text: t("dashboard.password_form.password_types.webLogin"),
    },
    {
      value: "creditCard",
      text: t("dashboard.password_form.password_types.creditCard"),
    },
    {
      value: "identificationDocument",
      text: t("dashboard.password_form.password_types.identificationDocument"),
    },
    {
      value: "note",
      text: t("dashboard.password_form.password_types.note"),
    },
    {
      value: "socialMediaAccount",
      text: t("dashboard.password_form.password_types.socialMediaAccount"),
    },
    {
      value: "emailAccount",
      text: t("dashboard.password_form.password_types.emailAccount"),
    },
    {
      value: "wiFiPassword",
      text: t("dashboard.password_form.password_types.wiFiPassword"),
    },
    {
      value: "bankAccount",
      text: t("dashboard.password_form.password_types.bankAccount"),
    },
  ];

  return (
    <>
      <SelectMenu
        value={newPassword.passwordType}
        data={passwordTypeOptions}
        label={t("dashboard.password_form.password_type_label")}
        id={"passwordType"}
        placeholder={t("dashboard.password_form.password_type_placeholder")}
        onValueChange={(string) => setNewPassword(passwordTypeStates[string])}
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
          spellCheck="false"
          required
          value={newPassword.passwordTitle}
          onChange={(e) =>
            setNewPassword({ ...newPassword, passwordTitle: e.target.value })
          }
        />
      </div>
    </>
  );
}

export default PasswordForm;
