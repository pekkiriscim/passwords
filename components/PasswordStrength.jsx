import { Progress } from "@/components/ui/progress";

import { CheckCircle2, XCircle } from "lucide-react";

import { calculateStrength } from "@/utils/calculateStrength";

function PasswordStrength({ password }) {
  const passwordStrength = calculateStrength(password);

  const renderPasswordRequirement = (condition, text) => (
    <li className="flex items-center">
      {condition ? (
        <CheckCircle2 className="mr-2 h-4 w-4" />
      ) : (
        <XCircle className="mr-2 h-4 w-4 text-muted-foreground" />
      )}
      <p className={`text-sm ${condition ? null : "text-muted-foreground"}`}>
        {text}
      </p>
    </li>
  );

  return (
    <>
      <Progress value={passwordStrength.value} className="h-1 my-1.5" />
      <ul className="mt-1.5 grid gap-y-1.5">
        {renderPasswordRequirement(
          passwordStrength.isLengthSufficient,
          "Şifrelerin en az 8 karakter uzunluğunda olması önerilir."
        )}
        {renderPasswordRequirement(
          passwordStrength.hasLowercase,
          "Şifrelerde küçük harf kullanmanız önerilir."
        )}
        {renderPasswordRequirement(
          passwordStrength.hasUppercase,
          "Şifrelerde büyük harf kullanmanız önerilir."
        )}
        {renderPasswordRequirement(
          passwordStrength.hasDigit,
          "Şifrelerde rakam kullanmanız önerilir."
        )}
        {renderPasswordRequirement(
          passwordStrength.hasSpecialCharacter,
          "Şifrelerde özel karakter kullanmanız önerilir."
        )}
      </ul>
    </>
  );
}

export default PasswordStrength;
