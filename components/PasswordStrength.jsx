import { Progress } from "@/components/ui/progress";

import { CheckCircle2, XCircle } from "lucide-react";

import { calculateStrength } from "@/utils/calculateStrength";

import { useTranslation } from "react-i18next";

function PasswordStrength({ password }) {
  const passwordStrength = calculateStrength(password);

  const renderPasswordRequirement = (condition, text) => (
    <li className="flex items-center">
      {condition ? (
        <CheckCircle2 className="mr-2 h-4 w-4 min-h-[1rem] min-w-[1rem]" />
      ) : (
        <XCircle className="mr-2 h-4 w-4 text-muted-foreground min-h-[1rem] min-w-[1rem]" />
      )}
      <p className={`text-sm ${condition ? null : "text-muted-foreground"}`}>
        {text}
      </p>
    </li>
  );

  const { t } = useTranslation();

  return (
    <>
      <Progress value={passwordStrength.value} className="h-1 my-1.5" />
      <ul className="mt-1.5 grid gap-y-1.5">
        {renderPasswordRequirement(
          passwordStrength.isLengthSufficient,
          t("dashboard.password_strength.is_length_sufficient")
        )}
        {renderPasswordRequirement(
          passwordStrength.hasLowercase,
          t("dashboard.password_strength.has_lowercase")
        )}
        {renderPasswordRequirement(
          passwordStrength.hasUppercase,
          t("dashboard.password_strength.has_uppercase")
        )}
        {renderPasswordRequirement(
          passwordStrength.hasDigit,
          t("dashboard.password_strength.has_digit")
        )}
        {renderPasswordRequirement(
          passwordStrength.hasSpecialCharacter,
          t("dashboard.password_strength.has_special_character")
        )}
      </ul>
    </>
  );
}

export default PasswordStrength;
