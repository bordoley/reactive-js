import { Function1 } from "../../../functions.js";
import { ObservableLike, PauseableObservableLike } from "../../../rx.js";
import { DispatcherLike } from "../../../util.js";
declare const PauseableObservable_sinkInto: <T>(sink: DispatcherLike<T>) => Function1<PauseableObservableLike<T>, ObservableLike<void>>;
export default PauseableObservable_sinkInto;
