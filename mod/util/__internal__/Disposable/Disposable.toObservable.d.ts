import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable$toObservable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export { Disposable$toObservable as default };
