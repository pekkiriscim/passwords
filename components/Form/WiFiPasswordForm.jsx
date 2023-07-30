import { useState, useContext } from "react";

import PasswordStrength from "@/components/PasswordStrength";
import PasswordGenerator from "@/components/PasswordGenerator";
import { NewPasswordContext } from "@/components/Dialog/PasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";

function WiFiPasswordForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="wifiName">WiFi İsmi</Label>
        <Input
          type="text"
          id="wifiName"
          placeholder="WiFi ismi giriniz"
          autoComplete="off"
          required
          value={newPassword.wifiName}
          onChange={(e) => {
            e.preventDefault();

            setNewPassword({ ...newPassword, wifiName: e.target.value });
          }}
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="wifiPassword">WiFi Şifresi</Label>
        <div className="flex">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            id="wifiPassword"
            placeholder="WiFi şifresi giriniz"
            autoComplete="off"
            required
            value={newPassword.wifiPassword}
            onChange={(e) => {
              e.preventDefault();

              setNewPassword({ ...newPassword, wifiPassword: e.target.value });
            }}
          />
          <Button
            type="button"
            variant="outline"
            className="ml-2"
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
