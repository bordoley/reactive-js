import { Operator } from "../../functions.ts";
import { DispatcherLike } from "./interfaces.ts";

export const dispatchTo = <T>(
  dispatcher: DispatcherLike<T>,
): Operator<T, void> => v => {
  dispatcher.dispatch(v);
};
