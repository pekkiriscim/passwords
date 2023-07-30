import { useContext, useEffect } from "react";

import { NewPasswordContext } from "@/components/Dialog/PasswordDialog";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { locations } from "@/data/locations";

function AddressForm() {
  const { newPassword, setNewPassword } = useContext(NewPasswordContext);

  const districts = locations.find(
    (element) => element.text === newPassword.city
  );

  useEffect(() => {
    if (newPassword.city && !newPassword.district) {
      return;
    }

    let isUpdating;

    if (districts === undefined) {
      isUpdating = false;
    } else {
      const isDistrictTrue = districts.districts.find(
        (obj) => obj.text === newPassword.district
      );

      isDistrictTrue === undefined ? (isUpdating = false) : (isUpdating = true);
    }

    if (districts !== undefined && isUpdating === false) {
      setNewPassword({ ...newPassword, district: districts.districts[0].text });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPassword.city]);

  return (
    <div className="grid gap-y-4 py-4">
      <div className="grid grid-cols-2 gap-x-2">
        <div className="grid gap-y-1.5 pt-4">
          <Label htmlFor="city">Şehir</Label>
          <Select
            value={newPassword.city}
            required
            onValueChange={(string) => {
              setNewPassword({
                ...newPassword,
                city: string,
              });
            }}
          >
            <SelectTrigger id="city" className="w-full">
              <SelectValue placeholder="Şehir seçiniz" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              <SelectGroup>
                {locations.map((element, index) => {
                  return (
                    <SelectItem key={index} value={element.text}>
                      {element.text}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-y-1.5 pt-4">
          <Label htmlFor="district">İlçe</Label>
          <Select
            value={newPassword.district}
            required
            disabled={!newPassword.city}
            onValueChange={(string) => {
              setNewPassword({ ...newPassword, district: string });
            }}
          >
            <SelectTrigger id="district" className="w-full">
              <SelectValue placeholder="İlçe seçiniz" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              <SelectGroup>
                {newPassword.city &&
                  districts.districts.map((element, index) => {
                    return (
                      <SelectItem key={index} value={element.text}>
                        {element.text}
                      </SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid w-full gap-y-1.5">
        <Label htmlFor="address">Adres</Label>
        <Textarea
          id="address"
          placeholder="Adres giriniz"
          autoComplete="off"
          required
          value={newPassword.address}
          onChange={(e) => {
            e.preventDefault();

            setNewPassword({
              ...newPassword,
              address: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
}

export default AddressForm;
