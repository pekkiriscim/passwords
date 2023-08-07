import { useContext } from "react";

import { FilterContext } from "@/app/page";
import { PasswordDialogContext } from "@/components/Page/Dashboard";

import DeletePasswordDialog from "@/components/Dialog/DeletePasswordDialog";

import { Button } from "./ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { passwordIcons } from "@/data/passwordIcons";

import { useTranslation } from "react-i18next";

function Passwords() {
  const { filter } = useContext(FilterContext);

  const { passwordDialog, setPasswordDialog } = useContext(
    PasswordDialogContext
  );

  const { t } = useTranslation();

  return (
    <Accordion type="single" collapsible>
      <div className="grid gap-y-4 mt-8">
        {filter.filteredPasswords.map((password, index) => {
          return (
            <AccordionItem key={index} value={password.passwordId}>
              <AccordionTrigger>
                <span className="flex items-center">
                  {passwordIcons[password.passwordType]}
                  {password.passwordTitle}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <pre className="p-4 border rounded-xsm">
                  {JSON.stringify(password, null, 2)}
                </pre>
                <div className="grid mt-4 grid-cols-2 gap-x-2">
                  <DeletePasswordDialog passwordId={password.passwordId} />
                  <Button
                    type="button"
                    className="whitespace-nowrap rounded-xsm"
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();

                      setPasswordDialog({
                        ...passwordDialog,
                        isOpen: true,
                        isUpdating: true,
                        updatePassword: password,
                      });
                    }}
                  >
                    {t("dashboard.passwords.edit_button")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </div>
    </Accordion>
  );
}

export default Passwords;
