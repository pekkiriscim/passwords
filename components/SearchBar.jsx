import AddNewPasswordDialog from "@/components/Dialog/AddNewPasswordDialog";

import { Input } from "@/components/ui/input";

function SearchBar() {
  return (
    <div className="grid mt-8 w-full grid-cols-[1fr_auto] gap-x-2">
      <Input type="text" placeholder="Ara" spellCheck="false" />
      <AddNewPasswordDialog />
    </div>
  );
}

export default SearchBar;
