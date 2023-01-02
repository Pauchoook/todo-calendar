import { authActions } from "./auth/actions";
import { eventActions } from "./event/actions";

export const allActions = {
  ...authActions,
  ...eventActions
}