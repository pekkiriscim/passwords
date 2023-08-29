import React from "react";

import { FolderLock } from "lucide-react";

import { useTranslation } from "react-i18next";

function EmptyState() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center p-16">
      <div className="w-12 min-w-[3rem] min-h-[3rem] h-12 border rounded-[0.625rem] flex items-center justify-center">
        <FolderLock className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-semibold mt-5 text-center">
        {t("dashboard.empty_state.title")}
      </h4>
      <p className="text-sm text-muted-foreground mt-2 text-center">
        {t("dashboard.empty_state.description")}
      </p>
    </div>
  );
}

export default EmptyState;
