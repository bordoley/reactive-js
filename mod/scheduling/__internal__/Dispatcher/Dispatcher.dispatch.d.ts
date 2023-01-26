import { Updater } from "../../../functions.js";
import { DispatcherLike_dispatch } from "../../../scheduling.js";
declare const Dispatcher_dispatch: <T, TDispatcher extends {
    [DispatcherLike_dispatch](v: T): void;
}>(v: T) => Updater<TDispatcher>;
export { Dispatcher_dispatch as default };
