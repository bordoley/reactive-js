import { SideEffect1 } from "../../../functions.mjs";
import { DispatcherLike_dispatch } from "../../../scheduling.mjs";
declare const dispatchTo: <T>(dispatcher: {
    [DispatcherLike_dispatch](v: T): void;
}) => SideEffect1<T>;
export { dispatchTo };
