import { DispatcherLike } from "./interfaces.ts";
import { Operator } from "../../functions.ts";

export const dispatchTo = <T>(dispatcher: DispatcherLike<T>): Operator<T, void> => v => {
  dispatcher.dispatch(v);
};