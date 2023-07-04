"use client";

import { createContext, useState } from "react";

import Authentication from "@/components/Page/Authentication";
import Dashboard from "@/components/Page/Dashboard";

export const AuthContext = createContext();
export const PasswordsContext = createContext();

export default function Home() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    isAuthorized: false,
  });

  const [passwords, setPasswords] = useState([]);

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      <PasswordsContext.Provider
        value={{ passwords: passwords, setPasswords: setPasswords }}
      >
        {auth.isAuthorized ? <Dashboard /> : <Authentication />}
      </PasswordsContext.Provider>
    </AuthContext.Provider>
  );
}
