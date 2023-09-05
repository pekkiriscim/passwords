import { useContext } from "react";

import { NewPasswordContext } from "@/components/Dialogs/PasswordDialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useTranslation } from "react-i18next";

function IdentificationDocumentForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const { t } = useTranslation();

  const handleIdentityNumberChange = (e) => {
    e.preventDefault();

    let formattedIdentityNumber = e.target.value.replace(/[^0-9]/g, "");

    setNewPassword({ ...newPassword, identityNumber: formattedIdentityNumber });
  };

  const handleBirthDateChange = (e) => {
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

    setNewPassword({ ...newPassword, birthDate: formattedDisplay });
  };

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="identityNumber">
          {t("dashboard.identification_document_form.identity_number_label")}
        </Label>
        <Input
          type="text"
          id="identityNumber"
          placeholder={t(
            "dashboard.identification_document_form.identity_number_placeholder"
          )}
          autoComplete="off"
          spellCheck="false"
          required
          value={newPassword.identityNumber}
          onChange={handleIdentityNumberChange}
        />
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="fullName">
          {t("dashboard.identification_document_form.full_name_label")}
        </Label>
        <Input
          type="text"
          id="fullName"
          placeholder={t(
            "dashboard.identification_document_form.full_name_placeholder"
          )}
          autoComplete="off"
          spellCheck="false"
          required
          value={newPassword.fullName}
          onChange={(e) =>
            setNewPassword({ ...newPassword, fullName: e.target.value })
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-x-3">
        <div className="grid w-full gap-y-1.5">
          <Label htmlFor="birthDate">
            {t("dashboard.identification_document_form.birth_date_label")}
          </Label>
          <Input
            type="text"
            id="birthDate"
            placeholder={t(
              "dashboard.identification_document_form.birth_date_placeholder"
            )}
            autoComplete="off"
            spellCheck="false"
            required
            value={newPassword.birthDate}
            onChange={handleBirthDateChange}
          />
        </div>
        <div className="grid w-full gap-y-1.5">
          <Label htmlFor="seriesNumber">
            {t("dashboard.identification_document_form.series_number_label")}
          </Label>
          <Input
            type="text"
            id="seriesNumber"
            placeholder={t(
              "dashboard.identification_document_form.series_number_placeholder"
            )}
            autoComplete="off"
            spellCheck="false"
            required
            value={newPassword.seriesNumber}
            onChange={(e) =>
              setNewPassword({ ...newPassword, seriesNumber: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default IdentificationDocumentForm;
