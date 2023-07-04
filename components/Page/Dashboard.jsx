import { useContext } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";

import { PasswordsContext } from "@/app/page";

import { Toaster } from "@/components/ui/toaster";

function Dashboard() {
  const { passwords } = useContext(PasswordsContext);

  return (
    <div className="w-full h-full grid grid-cols-[17.5rem_1fr]">
      <Sidebar />
      <div className="w-full h-full px-8 py-6">
        <Header
          title={"Şifreler"}
          description={
            "Şifrelerinizi güvenli bir şekilde yönetin ve erişim sağlayın."
          }
        />
        <SearchBar />
        <pre>{JSON.stringify(passwords, null, 2)}</pre>
      </div>
      <Toaster />
    </div>
  );
}

export default Dashboard;
