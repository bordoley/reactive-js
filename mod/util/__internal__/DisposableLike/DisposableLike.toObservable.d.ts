import { Function1 } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const DisposableLike__toObservable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export { DisposableLike__toObservable as default };
