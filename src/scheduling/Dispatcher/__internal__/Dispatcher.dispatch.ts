import { Updater } from "../../../functions.js";
import { DispatcherLike_dispatch } from "../../../scheduling.js";

const Dispatcher_dispatch =
  <T, TDispatcher extends { [DispatcherLike_dispatch](v: T): void }>(
    v: T,
  ): Updater<TDispatcher> =>
  dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
  };

export default Dispatcher_dispatch;
