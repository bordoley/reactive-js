import { Function1 } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import { ReadonlyArrayLike } from "../../../containers.js";
declare const Runnable$fromArray: <T>(options?: undefined) => Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
export { Runnable$fromArray as default };
