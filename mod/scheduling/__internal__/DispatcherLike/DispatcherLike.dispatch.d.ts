import { Updater } from "../../../functions.js";
import { DispatcherLike_dispatch } from "../../../scheduling.js";
declare const DispatcherLike__dispatch: <T, TDispatcher extends {
    [DispatcherLike_dispatch](v: T): void;
}>(v: T) => Updater<TDispatcher>;
export { DispatcherLike__dispatch as default };
