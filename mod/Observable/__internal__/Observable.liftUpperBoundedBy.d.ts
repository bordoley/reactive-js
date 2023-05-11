import { Function1 } from "../../functions.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike } from "../../types.js";
declare const Observable_liftUpperBoundedBy: (config: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}) => <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => (source: ObservableLike) => ObservableLike<unknown>;
export default Observable_liftUpperBoundedBy;
