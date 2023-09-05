import { useContext, useState } from "react";

import { AuthContext, PasswordsContext } from "@/app/page";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Loader2, Lock } from "lucide-react";

import { handleAuthentication } from "@/utils/handleAuthentication";

import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";

function Authentication() {
  const [isLoading, setIsLoading] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);
  const { setPasswords } = useContext(PasswordsContext);

  const { t } = useTranslation();

  const { toast } = useToast();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setIsLoading(true);

      const passwords = await handleAuthentication(auth.email, auth.password);

      if (!passwords) {
        toast({
          title: t("authentication.form.error_title"),
          description: t("authentication.form.error_description"),
        });

        return null;
      }

      setPasswords(passwords);

      setAuth({ ...auth, isAuthorized: true });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="w-96" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-10 h-10" />
        </div>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-semibold tracking-tight mb-2 text-center">
            {t("authentication.form.heading")}
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            {t("authentication.form.subheading")}
          </p>
        </div>
        <div className="grid gap-y-2 mb-4">
          <Label htmlFor="email">{t("authentication.form.email_label")}</Label>
          <Input
            id="email"
            placeholder={t("authentication.form.email_placeholder")}
            type="email"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            autoCorrect="off"
            disabled={isLoading}
            required={true}
            value={auth.email}
            onChange={(e) => setAuth({ ...auth, email: e.target.value })}
          />
        </div>
        <div className="grid gap-y-2 mb-6">
          <Label htmlFor="password">
            {t("authentication.form.password_label")}
          </Label>
          <Input
            id="password"
            placeholder={t("authentication.form.password_placeholder")}
            type="password"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            autoCorrect="off"
            disabled={isLoading}
            required={true}
            value={auth.password}
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
          />
        </div>
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {!isLoading && (
            <span className="ml-2">
              {t("authentication.form.continue_button")}
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}

export default Authentication;
