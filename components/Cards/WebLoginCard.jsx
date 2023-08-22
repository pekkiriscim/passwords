import React, { useState } from "react";

import { useTranslation } from "react-i18next";

function WebLoginCard({ password }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="text-sm font-medium">
        {`${t("dashboard.web_login_form.email_label")}:`}
        &nbsp;
        <span className="font-normal">{password.email}</span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.web_login_form.password_label")}:`}
        &nbsp;
        <span
          className="font-normal cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible
            ? password.password
            : "•".repeat(password.password.length)}
        </span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.web_login_form.url_label")}:`}
        &nbsp;
        <span className="font-normal">{password.URL}</span>
      </div>
    </>
  );
}

export default WebLoginCard;
