import React, { useState } from "react";

import { useTranslation } from "react-i18next";

function BankAccountCard({ password }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="text-sm font-medium">
        {`${t("dashboard.bank_account_form.iban_label")}:`}
        &nbsp;
        <span
          className="font-normal cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? password.iban : "•".repeat(password.iban.length)}
        </span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.bank_account_form.full_name_label")}:`}
        &nbsp;
        <span className="font-normal">{password.fullName}</span>
      </div>
    </>
  );
}

export default BankAccountCard;
