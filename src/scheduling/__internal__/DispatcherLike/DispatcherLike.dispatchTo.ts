import { SideEffect1 } from "../../../functions";
import { DispatcherLike_dispatch } from "../../../scheduling";

export const dispatchTo =
  <T>(dispatcher: { [DispatcherLike_dispatch](v: T): void }): SideEffect1<T> =>
  v =>
    dispatcher[DispatcherLike_dispatch](v);
