import { Function1 } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const ObservableLike__throttle: <T>(duration: number | Function1<T, ObservableLike<unknown>>, options?: {
    readonly mode?: ("interval" | "first" | "last") | undefined;
}) => Function1<ObservableLike<unknown>, ObservableLike<unknown>>;
export { ObservableLike__throttle as default };
