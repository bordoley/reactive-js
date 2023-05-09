import { Function1 } from "../../functions.js";
import { DisposableLike, ObservableLike } from "../../types.js";
declare const Disposable_toObservable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export default Disposable_toObservable;
