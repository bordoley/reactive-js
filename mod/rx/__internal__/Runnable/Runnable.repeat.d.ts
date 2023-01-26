import { Predicate } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
declare const Runnable$repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
export { Runnable$repeat as default };
