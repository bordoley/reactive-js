import { Function1 } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
declare const Observable_observeWith: <C extends ObservableLike<unknown>, T>(sink: ObserverLike<T>) => Function1<C, C>;
export default Observable_observeWith;
