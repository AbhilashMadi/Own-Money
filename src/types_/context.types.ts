
export type AppContextState = {
  something: string;
  navigate: (path: string) => void;
};

export type AppAction = {
  type: string;
  payload: never;
};