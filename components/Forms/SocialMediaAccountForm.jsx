import { useState, useContext } from "react";

import PasswordStrength from "@/components/PasswordStrength";
import PasswordGenerator from "@/components/PasswordGenerator";
import { NewPasswordContext } from "@/components/Dialogs/PasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";

import { useTranslation } from "react-i18next";

function SocialMediaAccountForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { t } = useTranslation();

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="username">
          {t("dashboard.social_media_account_form.username_label")}
        </Label>
        <Input
          type="text"
          id="username"
          placeholder={t(
            "dashboard.social_media_account_form.username_placeholder"
          )}
          autoComplete="off"
          spellCheck="false"
          required
          value={newPassword.username}
          onChange={(e) =>
            setNewPassword({ ...newPassword, username: e.target.value })
          }
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="password">
          {t("dashboard.social_media_account_form.password_label")}
        </Label>
        <div className="flex">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder={t(
              "dashboard.social_media_account_form.password_placeholder"
            )}
            autoComplete="off"
            spellCheck="false"
            required
            value={newPassword.password}
            onChange={(e) =>
              setNewPassword({ ...newPassword, password: e.target.value })
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
        <PasswordGenerator passwordName={"password"} />
        <PasswordStrength password={newPassword.password} />
      </div>
    </div>
  );
}

export default SocialMediaAccountForm;
