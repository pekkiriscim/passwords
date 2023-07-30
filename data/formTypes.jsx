import WebLoginForm from "@/components/Form/WebLoginForm";
import CreditCardForm from "@/components/Form/CreditCardForm";
import IdentificationDocumentForm from "@/components/Form/IdentificationDocumentForm";
import NoteForm from "@/components/Form/NoteForm";
import SocialMediaAccountForm from "@/components/Form/SocialMediaAccountForm";
import EmailAccountForm from "@/components/Form/EmailAccountForm";
import WiFiPasswordForm from "@/components/Form/WiFiPasswordForm";
import BankAccountForm from "@/components/Form/BankAccountForm";

export const formTypes = {
  webLogin: <WebLoginForm />,
  creditCard: <CreditCardForm />,
  identificationDocument: <IdentificationDocumentForm />,
  note: <NoteForm />,
  socialMediaAccount: <SocialMediaAccountForm />,
  emailAccount: <EmailAccountForm />,
  wiFiPassword: <WiFiPasswordForm />,
  bankAccount: <BankAccountForm />,
};
