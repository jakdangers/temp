import { atom } from 'recoil';

export interface UserAuthContextState {
  id: string;
  name: string;
  permissions: string[];
  roles: string[];
}

export const userAuthContextState = atom<UserAuthContextState | null>({
  key: 'userAuthContext',
  default: null,
});
