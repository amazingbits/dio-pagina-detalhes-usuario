import React from "react";
import { UserProps } from "./api";
import { UUID } from "crypto";
import { api } from "./api";
import { Md5 } from "ts-md5";

export type ApiContextProps = {
  info: UserProps | null;
  loading: boolean;
  isAuth: () => boolean;
  doLogin: (email: string, password: string) => Promise<boolean>;
  doLogout: () => void;
  getUserInfo: (userId: UUID) => Promise<UserProps | null>;
};

export const UserContext = React.createContext<ApiContextProps | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [info, setInfo] = React.useState<UserProps | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function doLogin(email: string, password: string): Promise<boolean> {
    setLoading(true);
    const user = (await api) as UserProps[];
    if (user) {
      const findUser = user.filter((user) => {
        return (
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === Md5.hashAsciiStr(password)
        );
      });
      if (findUser.length > 0) {
        setInfo(findUser[0]);
        window.localStorage.setItem("user", findUser[0].email);
        window.localStorage.setItem("userId", findUser[0].id);
        setLoading(false);
        return true;
      }
      setInfo(null);
      setLoading(false);
      return false;
    }
    setInfo(null);
    setLoading(false);
    return false;
  }

  function doLogout(): boolean {
    setLoading(true);
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("userId");
    setInfo(null);
    setLoading(false);
    return true;
  }

  function isAuth(): boolean {
    return window.localStorage.getItem("user") &&
      window.localStorage.getItem("userId")
      ? true
      : false;
  }

  async function getUserInfo(userId: UUID): Promise<UserProps | null> {
    setLoading(true);
    const user = (await api) as UserProps[];
    if (user) {
      const findUser = user.filter((user) => {
        return user.id === userId;
      });
      if (findUser) {
        setInfo(findUser[0]);
        setLoading(false);
        return findUser[0];
      }
      return null;
    }
    return null;
  }

  return (
    <UserContext.Provider
      value={{ info, loading, isAuth, doLogin, doLogout, getUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};
