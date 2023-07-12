import { useContext, useState } from "react";

import { AuthContext, PasswordsContext } from "@/app/page";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Loader2, Lock } from "lucide-react";

import { handleAuthentication } from "@/utils/handleAuthentication";

function Authentication() {
  const [isLoading, setIsLoading] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);
  const { setPasswords } = useContext(PasswordsContext);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        className="w-96"
        onSubmit={async (e) => {
          e.preventDefault();

          setIsLoading(true);

          const passwords = await handleAuthentication(
            auth.email,
            auth.password
          );

          if (passwords) {
            setPasswords(passwords);

            setAuth({ ...auth, isAuthorized: true });
          }

          setIsLoading(false);
        }}
      >
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
            disabled={isLoading}
            required={true}
            value={auth.email}
            onChange={(e) => {
              e.preventDefault();

              setAuth({ ...auth, email: e.target.value });
            }}
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
            disabled={isLoading}
            required={true}
            value={auth.password}
            onChange={(e) => {
              e.preventDefault();

              setAuth({ ...auth, password: e.target.value });
            }}
          />
        </div>
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {!isLoading && <span className="ml-2">Devam Et</span>}
        </Button>
        <pre>{JSON.stringify(auth, null, 2)}</pre>
      </form>
    </div>
  );
}

export default Authentication;
