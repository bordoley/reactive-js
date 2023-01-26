import { Function1, Optional } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
declare const Runnable$first: <T>() => Function1<RunnableLike<T>, Optional<T>>;
export { Runnable$first as default };
