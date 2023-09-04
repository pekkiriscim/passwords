import { useContext, useEffect } from "react";

import { FilterContext, PasswordsContext } from "@/app/page";

import { Button } from "@/components/ui/button";

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

import { useTranslation } from "react-i18next";

function Sidebar() {
  const { filter, setFilter } = useContext(FilterContext);
  const { passwords } = useContext(PasswordsContext);

  useEffect(() => {
    if (filter.passwordType === "passwords") {
      setFilter({ ...filter, filteredPasswords: passwords });
    } else {
      const filteredPasswords = passwords.filter(
        (element) => element.passwordType === filter.passwordType
      );

      setFilter({ ...filter, filteredPasswords: filteredPasswords });
    }
  }, [filter.passwordType, passwords]);

  const { t } = useTranslation();

  const sidebarContents = {
    passwords: {
      name: t("dashboard.sidebar.passwords"),
      children: {
        passwords: {
          name: t("dashboard.sidebar.passwords_children.passwords"),
          value: "passwords",
          icon: <Lock className="mr-2 h-4 w-4" />,
        },
      },
    },
    categories: {
      name: t("dashboard.sidebar.categories"),
      children: {
        webLogins: {
          name: t("dashboard.sidebar.categories_children.webLogins"),
          value: "webLogin",
          icon: <Globe className="mr-2 h-4 w-4" />,
        },
        creditCards: {
          name: t("dashboard.sidebar.categories_children.creditCards"),
          value: "creditCard",
          icon: <CreditCard className="mr-2 h-4 w-4" />,
        },
        identificationDocuments: {
          name: t(
            "dashboard.sidebar.categories_children.identificationDocuments"
          ),
          value: "identificationDocument",
          icon: <UserCircle2 className="mr-2 h-4 w-4" />,
        },
        notes: {
          name: t("dashboard.sidebar.categories_children.notes"),
          value: "note",
          icon: <FileText className="mr-2 h-4 w-4" />,
        },
        socialMediaAccounts: {
          name: t("dashboard.sidebar.categories_children.socialMediaAccounts"),
          value: "socialMediaAccount",
          icon: <AtSign className="mr-2 h-4 w-4" />,
        },
        emailAccounts: {
          name: t("dashboard.sidebar.categories_children.emailAccounts"),
          value: "emailAccount",
          icon: <Mail className="mr-2 h-4 w-4" />,
        },
        wiFiPasswords: {
          name: t("dashboard.sidebar.categories_children.wiFiPasswords"),
          value: "wiFiPassword",
          icon: <Wifi className="mr-2 h-4 w-4" />,
        },
        bankAccounts: {
          name: t("dashboard.sidebar.categories_children.bankAccounts"),
          value: "bankAccount",
          icon: <Landmark className="mr-2 h-4 w-4" />,
        },
      },
    },
  };

  return (
    <div className="h-full py-4 border-r space-y-4">
      {Object.values(sidebarContents).map((element, index) => (
        <div key={index} className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            {element.name}
          </h2>
          <div className="grid gap-y-1">
            {Object.values(element.children).map((element, index) => (
              <Button
                key={index}
                variant={
                  element.value === filter.passwordType ? "secondary" : "ghost"
                }
                size="sm"
                className="w-full justify-start"
                onClick={(e) => {
                  e.preventDefault();

                  setFilter({ ...filter, passwordType: element.value });
                }}
              >
                {element.icon}
                {element.name}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
