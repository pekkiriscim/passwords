import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

function Dashboard() {
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
        <div className="flex mt-8 w-full grid-flow-col gap-x-2">
          <Input type="email" placeholder="Ara" />
          <Button className=" whitespace-nowrap" type="submit">
            <Plus className="mr-2 h-4 w-4" />
            Yeni Şifre Ekle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
