import { useContext } from "react";

import { NewPasswordContext } from "@/components/Dialog/AddNewPasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function IdentificationDocumentForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="identityNumber">Kimlik Numarası</Label>
        <Input
          type="text"
          id="identityNumber"
          placeholder="Kimlik numarası giriniz"
          autoComplete="off"
          required
          value={newPassword.identityNumber}
          onChange={(e) => {
            e.preventDefault();

            let formattedIdentityNumber = e.target.value.replace(/[^0-9]/g, "");

            setNewPassword({
              ...newPassword,
              identityNumber: formattedIdentityNumber,
            });
          }}
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="fullName">Ad Soyad</Label>
        <Input
          type="text"
          id="fullName"
          placeholder="Ad soyad giriniz"
          autoComplete="off"
          required
          value={newPassword.fullName}
          onChange={(e) => {
            e.preventDefault();

            setNewPassword({
              ...newPassword,
              fullName: e.target.value,
            });
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-2">
        <div className="grid w-full gap-y-1.5">
          <Label htmlFor="birthDate">Doğum Tarihi</Label>
          <Input
            type="text"
            id="birthDate"
            placeholder="GG / AA / YYYY"
            autoComplete="off"
            required
            value={newPassword.birthDate}
            onChange={(e) => {
              e.preventDefault();

              let formattedBirthDate = e.target.value.replace(/[^0-9]/g, "");
              formattedBirthDate = formattedBirthDate.slice(0, 8);
              let formattedDisplay = "";
              formattedDisplay += formattedBirthDate.slice(0, 2);
              if (formattedBirthDate.length > 2) {
                formattedDisplay += "/" + formattedBirthDate.slice(2, 4);
              }
              if (formattedBirthDate.length > 4) {
                formattedDisplay += "/" + formattedBirthDate.slice(4, 8);
              }

              setNewPassword({
                ...newPassword,
                birthDate: formattedDisplay,
              });
            }}
          />
        </div>
        <div className="grid w-full gap-y-1.5">
          <Label htmlFor="seriesNumber">Seri Numarası</Label>
          <Input
            type="text"
            id="seriesNumber"
            placeholder="Seri numarası giriniz"
            autoComplete="off"
            required
            value={newPassword.seriesNumber}
            onChange={(e) => {
              e.preventDefault();

              setNewPassword({
                ...newPassword,
                seriesNumber: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default IdentificationDocumentForm;
