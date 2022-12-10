import { Updater } from "../../../functions.mjs";
import { DispatcherLike_dispatch } from "../../../scheduling.mjs";
declare const dispatch: <T, TDispatcher extends {
    [DispatcherLike_dispatch](v: T): void;
}>(v: T) => Updater<TDispatcher>;
export { dispatch as default };
