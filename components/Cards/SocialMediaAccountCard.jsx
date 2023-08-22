import React, { useState } from "react";

import { useTranslation } from "react-i18next";

function SocialMediaAccountCard({ password }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="text-sm font-medium">
        {`${t("dashboard.social_media_account_form.username_label")}:`}
        &nbsp;
        <span className="font-normal">{password.username}</span>
      </div>
      <div className="text-sm font-medium">
        {`${t("dashboard.social_media_account_form.password_label")}:`}
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
    </>
  );
}

export default SocialMediaAccountCard;
