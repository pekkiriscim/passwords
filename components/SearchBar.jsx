import PasswordDialog from "@/components/Dialog/PasswordDialog";

import { Input } from "@/components/ui/input";

function SearchBar() {
  return (
    <div className="grid mt-8 w-full grid-cols-[1fr_auto] gap-x-4">
      <Input type="text" placeholder="Ara" spellCheck="false" />
      <PasswordDialog />
    </div>
  );
}

export default SearchBar;
