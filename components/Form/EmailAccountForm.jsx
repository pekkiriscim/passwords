import { useState, useContext } from "react";

import PasswordStrength from "@/components/PasswordStrength";
import PasswordGenerator from "@/components/PasswordGenerator";
import { NewPasswordContext } from "@/components/Dialog/AddNewPasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";

function EmailAccountForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="email">E-posta</Label>
        <Input
          type="email"
          id="email"
          placeholder="E-posta giriniz"
          autoComplete="off"
          required
          value={newPassword.email}
          onChange={(e) => {
            e.preventDefault();

            setNewPassword({ ...newPassword, email: e.target.value });
          }}
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="password">Şifre</Label>
        <div className="flex">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder="Şifre giriniz"
            autoComplete="off"
            required
            value={newPassword.password}
            onChange={(e) => {
              e.preventDefault();

              setNewPassword({ ...newPassword, password: e.target.value });
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
        <PasswordGenerator passwordName={"password"} />
        <PasswordStrength password={newPassword.password} />
      </div>
    </div>
  );
}

export default EmailAccountForm;
