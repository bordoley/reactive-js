import { SideEffect1 } from "../../../functions.js";
import { DispatcherLike_dispatch } from "../../../scheduling.js";
declare const DispatcherLike__dispatchTo: <T>(dispatcher: {
    [DispatcherLike_dispatch](v: T): void;
}) => SideEffect1<T>;
export { DispatcherLike__dispatchTo as default };
