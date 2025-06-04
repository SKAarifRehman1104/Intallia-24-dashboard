// src/store/AuthStore.ts
import { create } from "zustand";
import api, { login } from "@/http/api.js";

type State = {
  token: string | null;
  userID: string | number | null;
  companyId: string | null;
  userGroupId: string | null;
};

type Actions = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
  token: localStorage.getItem("token"),
  userID: localStorage.getItem("userID"),
  companyId: localStorage.getItem("companyId"),
  userGroupId: localStorage.getItem("userGroupId"),

  login: async (userid, password) => {
    const payload = {
      LoginId: userid,
      Password: password,
      isValid: "",
    };

    const res = await login(payload);
    console.log("Login response:", res);

    // Extract values from the actual response
    const user = resr.UserValid[0];

    const token = user.Token;
    const userID = user.UserId;
    const companyId = user.CompanyId;
    const userGroupId = user.UserGroupId;

    localStorage.setItem("token", token);
    localStorage.setItem("userID", userID);
    localStorage.setItem("companyId", companyId);
    localStorage.setItem("userGroupId", userGroupId);

    set({ token, userID, companyId, userGroupId });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("companyId");
    localStorage.removeItem("userGroupId");
    set({ token: null, userID: null, companyId: null, userGroupId: null });
  },
}));
