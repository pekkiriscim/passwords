import { useContext } from "react";

import { FilterContext } from "@/app/page";

import { useTranslation } from "react-i18next";

function Header() {
  const { filter } = useContext(FilterContext);

  const { t } = useTranslation();

  const passwordTypes = {
    passwords: t("dashboard.header.password_types.passwords"),
    webLogin: t("dashboard.header.password_types.webLogin"),
    creditCard: t("dashboard.header.password_types.creditCard"),
    identificationDocument: t(
      "dashboard.header.password_types.identificationDocument"
    ),
    note: t("dashboard.header.password_types.note"),
    socialMediaAccount: t("dashboard.header.password_types.socialMediaAccount"),
    emailAccount: t("dashboard.header.password_types.emailAccount"),
    wiFiPassword: t("dashboard.header.password_types.wiFiPassword"),
    bankAccount: t("dashboard.header.password_types.bankAccount"),
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight mb-1">
        {passwordTypes[filter.passwordType]}
      </h2>
      <p className="text-sm text-muted-foreground">
        {t("dashboard.header.description")}
      </p>
    </div>
  );
}

export default Header;
