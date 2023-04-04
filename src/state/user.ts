import {atom} from "recoil";

export interface UserState {
  id: string;
  name: string;
  permissions: string[];
  roles: string[],
}

export const userState = atom<UserState>({
  key: "UserState",
  default: {
    id: "",
    name: "",
    permissions: [],
    roles: [],
  },
});
