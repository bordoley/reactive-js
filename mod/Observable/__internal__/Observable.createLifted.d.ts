import { Function1, Function3 } from "../../functions.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike } from "../../types.js";
declare const Observable_createLifted: Function3<ObservableLike, readonly Function1<ObserverLike<any>, ObserverLike<any>>[], {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}, ObservableLike>;
export default Observable_createLifted;
