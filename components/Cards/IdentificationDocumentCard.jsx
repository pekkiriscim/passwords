import React, { useState } from "react";

import { useTranslation } from "react-i18next";

function IdentificationDocumentCard({ password }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="text-sm font-medium">
        {`${t(
          "dashboard.identification_document_form.identity_number_label"
        )}:`}
        &nbsp;
        <span
          className="font-normal cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible
            ? password.identityNumber
            : "•".repeat(password.identityNumber.length)}
        </span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.identification_document_form.full_name_label")}:`}
        &nbsp;
        <span className="font-normal">{password.fullName}</span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.identification_document_form.birth_date_label")}:`}
        &nbsp;
        <span className="font-normal">{password.birthDate}</span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.identification_document_form.series_number_label")}:`}
        &nbsp;
        <span
          className="font-normal cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible
            ? password.seriesNumber
            : "•".repeat(password.seriesNumber.length)}
        </span>
      </div>
    </>
  );
}

export default IdentificationDocumentCard;
