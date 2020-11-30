import { SideEffect1 } from "../functions";
import { DispatcherLike } from "../observable";

export const dispatchTo = <T>(
  dispatcher: DispatcherLike<T>,
): SideEffect1<T> => v => dispatcher.dispatch(v);
