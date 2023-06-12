import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";

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
        <SearchBar />
      </div>
    </div>
  );
}

export default Dashboard;
