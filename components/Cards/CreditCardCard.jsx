import React, { useState } from "react";

import { useTranslation } from "react-i18next";

function CreditCardCard({ password }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="text-sm font-medium">
        {`${t("dashboard.credit_card_form.credit_card_number_label")}:`}
        &nbsp;
        <span
          className="font-normal cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible
            ? password.creditCardNumber
            : "•".repeat(password.creditCardNumber.length)}
        </span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.credit_card_form.card_holder_name_label")}:`}
        &nbsp;
        <span className="font-normal">{password.cardHolderName}</span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.credit_card_form.expiration_date_label")}:`}
        &nbsp;
        <span className="font-normal">{password.expirationDate}</span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.credit_card_form.security_code_label")}:`}
        &nbsp;
        <span
          className="font-normal cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible
            ? password.securityCode
            : "•".repeat(password.securityCode.length)}
        </span>
      </div>
    </>
  );
}

export default CreditCardCard;
