import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectMenu({ value, onValueChange, data, label, id, placeholder }) {
  return (
    <div className="grid gap-y-1.5 pt-4">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger id={id} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-80">
          <SelectGroup>
            {data.map((element, index) => {
              return (
                <SelectItem key={index} value={element.value}>
                  {element.text}
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
