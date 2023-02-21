import { SideEffect1 } from "../../../functions.js";
import { DispatcherLike_dispatch } from "../../../scheduling.js";

const Dispatcher_dispatchTo =
  <T>(dispatcher: { [DispatcherLike_dispatch](v: T): void }): SideEffect1<T> =>
  v =>
    dispatcher[DispatcherLike_dispatch](v);

export default Dispatcher_dispatchTo;
