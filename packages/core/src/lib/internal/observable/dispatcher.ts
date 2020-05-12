import { Operator } from "../../functions";
import { DispatcherLike } from "./interfaces";

export const dispatch = <T>(dispatcher: DispatcherLike<T>, v: T) => {
  dispatcher.dispatch(v);
};

export const dispatchTo = <T>(
  dispatcher: DispatcherLike<T>,
): Operator<T, void> => v => dispatch(dispatcher, v);
