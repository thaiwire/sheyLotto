import { UserType } from "@/interfaces";
import { create } from "zustand";

const usersGlobalStore = create((set) => ({
  loggedInUserData: null,
  setLoggedInUserData: (data: UserType) => set({ loggedInUserData: data }),
}));

export default usersGlobalStore;

export interface UsersGlobalStoreType {
  loggedInUserData: UserType | null;
  setLoggedInUserData: (data: UserType) => void;
}
