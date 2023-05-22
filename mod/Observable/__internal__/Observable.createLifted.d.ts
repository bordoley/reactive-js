import { Function1 } from "../../functions.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike } from "../../types.js";
declare const Observable_createLifted: <TA, TB>(obs: ObservableLike<TA>, ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[], config: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}) => ObservableLike<TB>;
export default Observable_createLifted;
