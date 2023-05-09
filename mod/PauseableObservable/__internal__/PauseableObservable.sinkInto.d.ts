import { Function1 } from "../../functions.js";
import { DeferredObservableLike, DispatcherLike, PauseableObservableLike } from "../../types.js";
declare const PauseableObservable_sinkInto: <T>(sink: DispatcherLike<T>) => Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
export default PauseableObservable_sinkInto;
