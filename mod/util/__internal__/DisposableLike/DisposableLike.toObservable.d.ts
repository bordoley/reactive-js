import { Function1 } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const toObservable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export { toObservable as default };
