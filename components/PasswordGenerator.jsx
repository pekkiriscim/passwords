import { Button } from "@/components/ui/button";
import { Label } from "@/components//ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Sparkles } from "lucide-react";

function PasswordGenerator() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            type="button"
            className="whitespace-nowrap mt-1.5"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Otomatik Oluştur
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="w-[28.875rem] grid gap-y-4 p-3"
        >
          <div className="grid w-full p-4 border rounded-xsm gap-y-3">
            <div className="flex items-center justify-between">
              <p className="text-foreground">Uzunluk</p>
              <p className="text-foreground">12</p>
            </div>
            <Slider min={6} defaultValue={[12]} max={64} step={1} />
          </div>
          <div className="flex w-full justify-between p-4 border rounded-xsm items-center gap-y-3">
            <Label htmlFor="lowercase" className="text-foreground">
              Küçük harfler
            </Label>
            <Switch id="lowercase" />
          </div>
          <div className="flex w-full justify-between p-4 border rounded-xsm items-center gap-y-3">
            <Label htmlFor="uppercase" className="text-foreground">
              Büyük harfler
            </Label>
            <Switch id="uppercase" />
          </div>
          <div className="flex w-full justify-between p-4 border rounded-xsm items-center gap-y-3">
            <Label htmlFor="digit" className="text-foreground">
              Rakamlar
            </Label>
            <Switch id="digit" />
          </div>
          <div className="flex w-full justify-between p-4 border rounded-xsm items-center gap-y-3">
            <Label htmlFor="specialCharacter" className="text-foreground">
              Özel karakterler
            </Label>
            <Switch id="specialCharacter" />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default PasswordGenerator;
