import { useContext, useEffect, useState } from "react";

import { FilterContext, PasswordsContext } from "@/app/page";

import PasswordDialog from "@/components/Dialogs/PasswordDialog";

import { Input } from "@/components/ui/input";

import { useTranslation } from "react-i18next";

function SearchBar() {
  const [search, setSearch] = useState("");

  const { passwords } = useContext(PasswordsContext);
  const { filter, setFilter } = useContext(FilterContext);

  const { t } = useTranslation();

  useEffect(() => {
    if (search === "") {
      let filteredPasswords;

      if (filter.passwordType === "passwords") {
        filteredPasswords = passwords;
      } else {
        filteredPasswords = passwords.filter(
          (element) => element.passwordType === filter.passwordType
        );
      }

      setFilter({ ...filter, filteredPasswords });
    } else {
      if (filter.passwordType === "passwords") {
        const filteredPasswords = passwords.filter((element) =>
          element.passwordTitle.toLowerCase().includes(search.toLowerCase())
        );

        setFilter({ ...filter, filteredPasswords });
      } else {
        const filteredPasswords = passwords
          .filter((element) => element.passwordType === filter.passwordType)
          .filter((element) =>
            element.passwordTitle.toLowerCase().includes(search.toLowerCase())
          );

        setFilter({ ...filter, filteredPasswords });
      }
    }
  }, [search, passwords, filter.passwordType]);

  return (
    <div className="grid mt-8 w-full grid-cols-[1fr_auto] gap-x-3">
      <Input
        value={search}
        type="text"
        placeholder={t("dashboard.search_bar.search_placeholder")}
        spellCheck="false"
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
      <PasswordDialog />
    </div>
  );
}

export default SearchBar;
