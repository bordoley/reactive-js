import { DispatcherLike } from "./interfaces";
import { Operator } from "../../functions";

export const dispatchTo = <T>(dispatcher: DispatcherLike<T>): Operator<T, void> => v => {
  dispatcher.dispatch(v);
};