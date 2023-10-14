
import { AppAction, AppContextState } from "@types_/context.types";
import { Actions } from "@types_/constants.enums";

export const appReducer = (state: AppContextState, action: AppAction) => {
  const { payload, type } = action;

  switch (type) {
  case Actions.SET_SOMETHING:
    return { ...state, something: payload };
  default:
    return state;
  }
};