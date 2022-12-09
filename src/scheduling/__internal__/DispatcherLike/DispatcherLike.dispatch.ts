import { Updater } from "../../../functions";
import { DispatcherLike_dispatch } from "../../../scheduling";

export const dispatch =
  <T, TDispatcher extends { [DispatcherLike_dispatch](v: T): void }>(
    v: T,
  ): Updater<TDispatcher> =>
  dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
  };
