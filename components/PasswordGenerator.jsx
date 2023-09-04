import { useState, useContext } from "react";

import { NewPasswordContext } from "@/components/Dialogs/PasswordDialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components//ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Sparkles } from "lucide-react";

import { generatePassword } from "@/utils/generatePassword";

import { useTranslation } from "react-i18next";

function PasswordGenerator({ passwordName }) {
  const [generateSettings, setGenerateSettings] = useState({
    length: 8,
    includeUpperCase: true,
    includeLowerCase: true,
    includeDigits: true,
    includeSpecialChars: true,
  });

  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { toast } = useToast();

  const { t } = useTranslation();

  const handleGeneratePassword = (e) => {
    e.preventDefault();

    const generatedPassword = generatePassword(generateSettings);

    if (!generatedPassword) {
      toast({
        title: t("dashboard.password_generator.error_title"),
        description: t("dashboard.password_generator.error_description"),
      });
    } else {
      setNewPassword({
        ...newPassword,
        [passwordName]: generatedPassword,
      });
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            type="button"
            className="whitespace-nowrap mt-1.5"
            onClick={handleGeneratePassword}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {t("dashboard.password_generator.button")}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="w-[28.875rem] grid gap-y-4 p-3"
        >
          <div className="grid w-full p-4 border rounded-xsm gap-y-3">
            <div className="flex items-center justify-between">
              <p className="text-foreground">
                {t("dashboard.password_generator.length")}
              </p>
              <p className="text-foreground">{generateSettings.length}</p>
            </div>
            <Slider
              value={[generateSettings.length]}
              min={6}
              max={64}
              step={1}
              onValueChange={(number) =>
                setGenerateSettings({ ...generateSettings, length: number })
              }
            />
          </div>
          <div className="flex w-full justify-between p-4 border rounded-xsm items-center gap-y-3">
            <Label htmlFor="lowercase" className="text-foreground">
              {t("dashboard.password_generator.lowercase")}
            </Label>
            <Switch
              checked={generateSettings.includeLowerCase}
              id="lowercase"
              onCheckedChange={(boolean) =>
                setGenerateSettings({
                  ...generateSettings,
                  includeLowerCase: boolean,
                })
              }
            />
          </div>
          <div className="flex w-full justify-between p-4 border rounded-xsm items-center gap-y-3">
            <Label htmlFor="uppercase" className="text-foreground">
              {t("dashboard.password_generator.uppercase")}
            </Label>
            <Switch
              checked={generateSettings.includeUpperCase}
              id="uppercase"
              onCheckedChange={(boolean) =>
                setGenerateSettings({
                  ...generateSettings,
                  includeUpperCase: boolean,
                })
              }
            />
          </div>
          <div className="flex w-full justify-between p-4 border rounded-xsm items-center gap-y-3">
            <Label htmlFor="digit" className="text-foreground">
              {t("dashboard.password_generator.digit")}
            </Label>
            <Switch
              checked={generateSettings.includeDigits}
              id="digit"
              onCheckedChange={(boolean) =>
                setGenerateSettings({
                  ...generateSettings,
                  includeDigits: boolean,
                })
              }
            />
          </div>
          <div className="flex w-full justify-between p-4 border rounded-xsm items-center gap-y-3">
            <Label htmlFor="specialCharacter" className="text-foreground">
              {t("dashboard.password_generator.special_character")}
            </Label>
            <Switch
              checked={generateSettings.includeSpecialChars}
              id="specialCharacter"
              onCheckedChange={(boolean) =>
                setGenerateSettings({
                  ...generateSettings,
                  includeSpecialChars: boolean,
                })
              }
            />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default PasswordGenerator;
