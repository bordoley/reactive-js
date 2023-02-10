import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_toObservable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export { Disposable_toObservable as default };
