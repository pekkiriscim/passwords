import WebLoginForm from "@/components/Forms/WebLoginForm";
import CreditCardForm from "@/components/Forms/CreditCardForm";
import IdentificationDocumentForm from "@/components/Forms/IdentificationDocumentForm";
import NoteForm from "@/components/Forms/NoteForm";
import SocialMediaAccountForm from "@/components/Forms/SocialMediaAccountForm";
import EmailAccountForm from "@/components/Forms/EmailAccountForm";
import WiFiPasswordForm from "@/components/Forms/WiFiPasswordForm";
import BankAccountForm from "@/components/Forms/BankAccountForm";

import WebLoginCard from "@/components/Cards/WebLoginCard";
import CreditCardCard from "@/components/Cards/CreditCardCard";
import IdentificationDocumentCard from "@/components/Cards/IdentificationDocumentCard";
import NoteCard from "@/components/Cards/NoteCard";
import SocialMediaAccountCard from "@/components/Cards/SocialMediaAccountCard";
import EmailAccountCard from "@/components/Cards/EmailAccountCard";
import WiFiPasswordCard from "@/components/Cards/WiFiPasswordCard";
import BankAccountCard from "@/components/Cards/BankAccountCard";

import {
  Globe,
  CreditCard,
  UserCircle2,
  FileText,
  AtSign,
  Mail,
  Wifi,
  Landmark,
} from "lucide-react";

export const formComponents = {
  webLogin: <WebLoginForm />,
  creditCard: <CreditCardForm />,
  identificationDocument: <IdentificationDocumentForm />,
  note: <NoteForm />,
  socialMediaAccount: <SocialMediaAccountForm />,
  emailAccount: <EmailAccountForm />,
  wiFiPassword: <WiFiPasswordForm />,
  bankAccount: <BankAccountForm />,
};

export const cardComponents = {
  webLogin: WebLoginCard,
  creditCard: CreditCardCard,
  identificationDocument: IdentificationDocumentCard,
  note: NoteCard,
  socialMediaAccount: SocialMediaAccountCard,
  emailAccount: EmailAccountCard,
  wiFiPassword: WiFiPasswordCard,
  bankAccount: BankAccountCard,
};

export const passwordIcons = {
  webLogin: <Globe className="mr-4 h-5 w-5" />,
  creditCard: <CreditCard className="mr-4 h-5 w-5" />,
  identificationDocument: <UserCircle2 className="mr-4 h-5 w-5" />,
  note: <FileText className="mr-4 h-5 w-5" />,
  socialMediaAccount: <AtSign className="mr-4 h-5 w-5" />,
  emailAccount: <Mail className="mr-4 h-5 w-5" />,
  wiFiPassword: <Wifi className="mr-4 h-5 w-5" />,
  bankAccount: <Landmark className="mr-4 h-5 w-5" />,
};

export const passwordTypeOptions = [
  {
    value: "webLogin",
    text: "Web Girişi",
  },
  {
    value: "creditCard",
    text: "Kredi Kartı",
  },
  {
    value: "identificationDocument",
    text: "Kimlik Belgesi",
  },
  {
    value: "note",
    text: "Not",
  },
  {
    value: "socialMediaAccount",
    text: "Sosyal Medya Hesabı",
  },
  {
    value: "emailAccount",
    text: "E-posta Hesabı",
  },
  {
    value: "wiFiPassword",
    text: "WiFi Şifresi",
  },
  {
    value: "bankAccount",
    text: "Banka Hesabı",
  },
];

export const passwordTypeStates = {
  webLogin: {
    passwordType: "webLogin",
    passwordTitle: "",
    email: "",
    password: "",
    URL: "",
  },
  creditCard: {
    passwordType: "creditCard",
    passwordTitle: "",
    creditCardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    securityCode: "",
  },
  identificationDocument: {
    passwordType: "identificationDocument",
    passwordTitle: "",
    identityNumber: "",
    fullName: "",
    birthDate: "",
    seriesNumber: "",
  },
  note: {
    passwordType: "note",
    passwordTitle: "",
    note: "",
  },
  socialMediaAccount: {
    passwordType: "socialMediaAccount",
    passwordTitle: "",
    username: "",
    password: "",
  },
  emailAccount: {
    passwordType: "emailAccount",
    passwordTitle: "",
    email: "",
    password: "",
  },
  wiFiPassword: {
    passwordType: "wiFiPassword",
    passwordTitle: "",
    wifiName: "",
    wifiPassword: "",
  },
  bankAccount: {
    passwordType: "bankAccount",
    passwordTitle: "",
    iban: "",
    fullName: "",
  },
};
