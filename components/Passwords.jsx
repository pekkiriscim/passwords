import { useContext } from "react";

import { PasswordsContext } from "@/app/page";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { passwordIcons } from "@/data/passwordIcons";

function Passwords() {
  const { passwords } = useContext(PasswordsContext);

  return (
    <Accordion type="single" collapsible>
      <div className="grid gap-y-4 mt-8">
        {passwords.map((password, index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
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
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </div>
    </Accordion>
  );
}

export default Passwords;
