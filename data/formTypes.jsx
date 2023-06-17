import WebLoginForm from "@/components/Form/WebLoginForm";
import CreditCardForm from "@/components/Form/CreditCardForm";
import IdentificationDocumentForm from "@/components/Form/IdentificationDocumentForm";

export const formTypes = {
  webLogin: <WebLoginForm />,
  creditCard: <CreditCardForm />,
  identificationDocument: <IdentificationDocumentForm />,
};
