import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Loader2, Lock } from "lucide-react";

function Authentication() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="w-96">
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-10 h-10" />
        </div>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-semibold tracking-tight mb-2 text-center">
            Kolay Kullanım, Yüksek Güvenlik.
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Passwords, hızlı giriş, güçlü şifreleme ve kullanıcı dostu arayüzü
            ile şifrelerinizi yönetmenin en iyi yoludur.
          </p>
        </div>
        <div className="grid gap-y-2 mb-4">
          <Label htmlFor="email">E-posta</Label>
          <Input
            id="email"
            placeholder="E-postanızı giriniz"
            type="email"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            disabled={false}
            required={true}
          />
        </div>
        <div className="grid gap-y-2 mb-6">
          <Label htmlFor="password">Şifre</Label>
          <Input
            id="password"
            placeholder="Şifrenizi giriniz"
            type="password"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            disabled={false}
            required={true}
          />
        </div>
        <Button className="w-full" disabled={false}>
          {false && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Devam Et
        </Button>
      </form>
    </div>
  );
}

export default Authentication;
