import { Predicate } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
declare const Runnable_repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
export { Runnable_repeat as default };
