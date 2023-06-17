import { store } from './store';

export type UserLinkType = {
  name: string;
  src: string;
};

export type FormDataType = {
  nickname: string;
  name: string;
  surname: string;
  sex: string;
  advantages: string[];
  about: string;
  groupCheck: string[];
  groupRadio: string;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
