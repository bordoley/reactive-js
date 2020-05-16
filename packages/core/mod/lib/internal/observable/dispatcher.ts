import { Function1 } from "../../functions.ts";
import { DispatcherLike } from "./interfaces.ts";

export const dispatch = <T>(dispatcher: DispatcherLike<T>, v: T) => {
  dispatcher.dispatch(v);
};

export const dispatchTo = <T>(
  dispatcher: DispatcherLike<T>,
): Function1<T, void> => v => dispatch(dispatcher, v);
