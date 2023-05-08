import { DisposableLike, ObservableLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Disposable_toObservable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export default Disposable_toObservable;
