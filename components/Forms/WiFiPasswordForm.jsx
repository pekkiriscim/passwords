import { useState, useContext } from "react";

import PasswordStrength from "@/components/PasswordStrength";
import PasswordGenerator from "@/components/PasswordGenerator";
import { NewPasswordContext } from "@/components/Dialogs/PasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";

import { useTranslation } from "react-i18next";

function WiFiPasswordForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { t } = useTranslation();

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="wifiName">
          {t("dashboard.wifi_password_form.wifi_name_label")}
        </Label>
        <Input
          type="text"
          id="wifiName"
          placeholder={t("dashboard.wifi_password_form.wifi_name_placeholder")}
          autoComplete="off"
          spellCheck="false"
          required
          value={newPassword.wifiName}
          onChange={(e) =>
            setNewPassword({ ...newPassword, wifiName: e.target.value })
          }
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="wifiPassword">
          {t("dashboard.wifi_password_form.wifi_password_label")}
        </Label>
        <div className="flex">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            id="wifiPassword"
            placeholder={t(
              "dashboard.wifi_password_form.wifi_password_placeholder"
            )}
            autoComplete="off"
            spellCheck="false"
            required
            value={newPassword.wifiPassword}
            onChange={(e) =>
              setNewPassword({ ...newPassword, wifiPassword: e.target.value })
            }
          />
          <Button
            type="button"
            variant="outline"
            className="ml-3"
            onClick={(e) => {
              e.preventDefault();

              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            {isPasswordVisible ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </Button>
        </div>
        <PasswordGenerator passwordName={"wifiPassword"} />
        <PasswordStrength password={newPassword.wifiPassword} />
      </div>
    </div>
  );
}

export default WiFiPasswordForm;
