import { useContext } from "react";

import { NewPasswordContext } from "@/components/Dialog/PasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CreditCardForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="creditCardNumber">Kart Numarası</Label>
        <Input
          type="text"
          id="creditCardNumber"
          placeholder="•••• •••• •••• ••••"
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
        <Label htmlFor="cardHolderName">Kart Üzerindeki İsim</Label>
        <Input
          type="text"
          id="cardHolderName"
          placeholder="Kart üzerindeki ismi giriniz"
          autoComplete="off"
          required
          value={newPassword.cardHolderName}
          onChange={(e) => {
            e.preventDefault();

            setNewPassword({ ...newPassword, cardHolderName: e.target.value });
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-2">
        <div className="grid w-full gap-y-1.5">
          <Label htmlFor="expirationDate">Son Kullanma Tarihi</Label>
          <Input
            type="text"
            id="expirationDate"
            placeholder="Ay / Yıl"
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
          <Label htmlFor="securityCode">Güvenlik Kodu</Label>
          <Input
            type="text"
            id="securityCode"
            placeholder="CVC / CVV"
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
