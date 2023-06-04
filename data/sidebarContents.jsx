import {
  Lock,
  Star,
  Trash2,
  Globe,
  CreditCard,
  FileText,
  AtSign,
  Mail,
  Wifi,
  Landmark,
  Map,
  UserCircle2,
} from "lucide-react";

export const sidebarContents = {
  passwords: {
    name: "Passwords",
    children: {
      passwords: {
        name: "Şifreler",
        icon: <Lock className="mr-2 h-4 w-4" />,
      },
      favorites: {
        name: "Favoriler",
        icon: <Star className="mr-2 h-4 w-4" />,
      },
      trashBin: {
        name: "Çöp Kutusu",
        icon: <Trash2 className="mr-2 h-4 w-4" />,
      },
    },
  },
  categories: {
    name: "Kategoriler",
    children: {
      webLogins: {
        name: "Web Girişleri",
        icon: <Globe className="mr-2 h-4 w-4" />,
      },
      creditCards: {
        name: "Kredi Kartları",
        icon: <CreditCard className="mr-2 h-4 w-4" />,
      },
      identificationDocuments: {
        name: "Kimlik Belgeleri",
        icon: <UserCircle2 className="mr-2 h-4 w-4" />,
      },
      notes: {
        name: "Notlar",
        icon: <FileText className="mr-2 h-4 w-4" />,
      },
      socialMediaAccounts: {
        name: "Sosyal Medya Hesapları",
        icon: <AtSign className="mr-2 h-4 w-4" />,
      },
      emailAccounts: {
        name: "E-posta Hesapları",
        icon: <Mail className="mr-2 h-4 w-4" />,
      },
      wiFiPasswords: {
        name: "WiFi Şifreleri",
        icon: <Wifi className="mr-2 h-4 w-4" />,
      },
      bankAccounts: {
        name: "Banka Hesapları",
        icon: <Landmark className="mr-2 h-4 w-4" />,
      },
      addresses: {
        name: "Adresler",
        icon: <Map className="mr-2 h-4 w-4" />,
      },
    },
  },
};
