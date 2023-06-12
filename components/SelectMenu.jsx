import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectMenu({ value, onValueChange, passwordTypes }) {
  return (
    <div className="grid gap-y-1.5 pt-4">
      <Label htmlFor="passwordType">Şifre Türü</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger id="passwordType" className="w-full">
          <SelectValue placeholder="Şifre türü seçiniz" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {passwordTypes.map((element, index) => {
              return (
                <SelectItem key={index} value={element.value}>
                  {element.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectMenu;
