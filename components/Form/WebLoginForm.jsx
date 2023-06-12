import { useState } from "react";

import PasswordStrength from "@/components/PasswordStrength";
import PasswordGenerator from "@/components/PasswordGenerator";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";

function WebLoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="webLoginEmail">E-posta</Label>
        <Input
          type="email"
          id="webLoginEmail"
          placeholder="E-posta giriniz"
          autoComplete="off"
          required
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="webLoginPassword">Şifre</Label>
        <div className="flex">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            id="webLoginPassword"
            placeholder="Şifre giriniz"
            autoComplete="off"
            required
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
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
        <PasswordGenerator />
        <PasswordStrength password={password} />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="webLoginURL">URL</Label>
        <Input
          type="url"
          id="webLoginURL"
          placeholder="URL giriniz"
          autoComplete="off"
          required
        />
      </div>
    </div>
  );
}

export default WebLoginForm;
