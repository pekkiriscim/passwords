import { useContext } from "react";

import { NewPasswordContext } from "@/components/Dialog/PasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useTranslation } from "react-i18next";

function CreditCardForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { t } = useTranslation();

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="creditCardNumber">
          {t("dashboard.credit_card_form.credit_card_number_label")}
        </Label>
        <Input
          type="text"
          id="creditCardNumber"
          placeholder={t(
            "dashboard.credit_card_form.credit_card_number_placeholder"
          )}
          autoComplete="off"
          required
          value={newPassword.creditCardNumber}
          maxLength={19}
          onChange={(e) => {
            e.preventDefault();

            let formattedNumber = e.target.value.replace(/[^0-9]/g, "");
            formattedNumber = formattedNumber.replace(/\s/g, "");
            let formattedDisplay = "";
            for (let i = 0; i < formattedNumber.length; i += 4) {
              formattedDisplay += formattedNumber.slice(i, i + 4) + " ";
            }

            setNewPassword({
              ...newPassword,
              creditCardNumber: formattedDisplay.trim(),
            });
          }}
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="cardHolderName">
          {t("dashboard.credit_card_form.card_holder_name_label")}
        </Label>
        <Input
          type="text"
          id="cardHolderName"
          placeholder={t(
            "dashboard.credit_card_form.card_holder_name_placeholder"
          )}
          autoComplete="off"
          required
          value={newPassword.cardHolderName}
          onChange={(e) => {
            e.preventDefault();

            setNewPassword({ ...newPassword, cardHolderName: e.target.value });
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-3">
        <div className="grid w-full gap-y-1.5">
          <Label htmlFor="expirationDate">
            {t("dashboard.credit_card_form.expiration_date_label")}
          </Label>
          <Input
            type="text"
            id="expirationDate"
            placeholder={t(
              "dashboard.credit_card_form.expiration_date_placeholder"
            )}
            autoComplete="off"
            required
            value={newPassword.expirationDate}
            maxLength={5}
            onChange={(e) => {
              e.preventDefault();

              let formattedNumber = e.target.value.replace(/[^0-9]/g, "");
              formattedNumber = formattedNumber.replace(/\s/g, "");
              let formattedDisplay = "";
              for (let i = 0; i < formattedNumber.length; i += 2) {
                formattedDisplay += formattedNumber.slice(i, i + 2);
                if (i + 2 < formattedNumber.length) {
                  formattedDisplay += "/";
                }
              }

              setNewPassword({
                ...newPassword,
                expirationDate: formattedDisplay,
              });
            }}
          />
        </div>
        <div className="grid w-full gap-y-1.5">
          <Label htmlFor="securityCode">
            {t("dashboard.credit_card_form.security_code_label")}
          </Label>
          <Input
            type="text"
            id="securityCode"
            placeholder={t(
              "dashboard.credit_card_form.security_code_placeholder"
            )}
            autoComplete="off"
            required
            value={newPassword.securityCode}
            maxLength={4}
            onChange={(e) => {
              e.preventDefault();

              let formattedSecurityCode = e.target.value.replace(/[^0-9]/g, "");

              setNewPassword({
                ...newPassword,
                securityCode: formattedSecurityCode,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreditCardForm;
