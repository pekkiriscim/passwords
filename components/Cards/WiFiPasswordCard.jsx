import React, { useState } from "react";

import { useTranslation } from "react-i18next";

function WiFiPasswordCard({ password }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="text-sm font-medium">
        {`${t("dashboard.wifi_password_form.wifi_name_label")}:`}
        &nbsp;
        <span className="font-normal">{password.wifiName}</span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.wifi_password_form.wifi_password_label")}:`}
        &nbsp;
        <span
          className="font-normal cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible
            ? password.wifiPassword
            : "•".repeat(password.wifiPassword.length)}
        </span>
      </div>
    </>
  );
}

export default WiFiPasswordCard;
