import { SideEffect1 } from "../../../functions.js";
import { DispatcherLike_dispatch } from "../../../scheduling.js";
declare const Dispatcher$dispatchTo: <T>(dispatcher: {
    [DispatcherLike_dispatch](v: T): void;
}) => SideEffect1<T>;
export { Dispatcher$dispatchTo as default };
