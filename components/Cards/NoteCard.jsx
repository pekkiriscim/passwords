import React from "react";

import { useTranslation } from "react-i18next";

function NoteCard({ password }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-sm font-medium">
        {`${t("dashboard.note_form.note_label")}:`}
        &nbsp;
        <span className="font-normal">{password.note}</span>
      </div>
    </>
  );
}

export default NoteCard;
