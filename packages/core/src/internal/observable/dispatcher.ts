import { Operator } from "../../functions";
import { DispatcherLike } from "./interfaces";

export const dispatchTo = <T>(
  dispatcher: DispatcherLike<T>,
): Operator<T, void> => v => {
  dispatcher.dispatch(v);
};
