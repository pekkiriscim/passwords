"use client";

import { createContext, useState } from "react";

import Authentication from "@/components/Pages/Authentication";
import Dashboard from "@/components/Pages/Dashboard";

import { Toaster } from "@/components/ui/toaster";

export const AuthContext = createContext();
export const PasswordsContext = createContext();
export const FilterContext = createContext();

export default function Home() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    isAuthorized: false,
  });

  const [passwords, setPasswords] = useState([]);

  const [filter, setFilter] = useState({
    passwordType: "passwords",
    filteredPasswords: passwords,
  });

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      <PasswordsContext.Provider
        value={{ passwords: passwords, setPasswords: setPasswords }}
      >
        <FilterContext.Provider
          value={{ filter: filter, setFilter: setFilter }}
        >
          {auth.isAuthorized ? <Dashboard /> : <Authentication />}
          <Toaster />
        </FilterContext.Provider>
      </PasswordsContext.Provider>
    </AuthContext.Provider>
  );
}
