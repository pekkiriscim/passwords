import {
  Lock,
  Globe,
  CreditCard,
  FileText,
  AtSign,
  Mail,
  Wifi,
  Landmark,
  UserCircle2,
} from "lucide-react";

export const sidebarContents = {
  passwords: {
    name: "Passwords",
    children: {
      passwords: {
        name: "Şifreler",
        value: "passwords",
        icon: <Lock className="mr-2 h-4 w-4" />,
      },
    },
  },
  categories: {
    name: "Kategoriler",
    children: {
      webLogins: {
        name: "Web Girişleri",
        value: "webLogin",
        icon: <Globe className="mr-2 h-4 w-4" />,
      },
      creditCards: {
        name: "Kredi Kartları",
        value: "creditCard",
        icon: <CreditCard className="mr-2 h-4 w-4" />,
      },
      identificationDocuments: {
        name: "Kimlik Belgeleri",
        value: "identificationDocument",
        icon: <UserCircle2 className="mr-2 h-4 w-4" />,
      },
      notes: {
        name: "Notlar",
        value: "note",
        icon: <FileText className="mr-2 h-4 w-4" />,
      },
      socialMediaAccounts: {
        name: "Sosyal Medya Hesapları",
        value: "socialMediaAccount",
        icon: <AtSign className="mr-2 h-4 w-4" />,
      },
      emailAccounts: {
        name: "E-posta Hesapları",
        value: "emailAccount",
        icon: <Mail className="mr-2 h-4 w-4" />,
      },
      wiFiPasswords: {
        name: "WiFi Şifreleri",
        value: "wiFiPassword",
        icon: <Wifi className="mr-2 h-4 w-4" />,
      },
      bankAccounts: {
        name: "Banka Hesapları",
        value: "bankAccount",
        icon: <Landmark className="mr-2 h-4 w-4" />,
      },
    },
  },
};
