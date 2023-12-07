import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike } from "../../../concurrent.js";
declare const Observable_flatten: (op: <T>(o: ObserverLike<T>) => ObserverLike<ObservableLike<T>>) => <T_1>(options?: {
    readonly [ObservableLike_isDeferred]?: boolean;
    readonly [ObservableLike_isPure]?: boolean;
    readonly [ObservableLike_isRunnable]?: boolean;
}) => import("../../../functions.js").Function1<ObservableLike<ObservableLike<T_1>>, ObservableLike<T_1>>;
export default Observable_flatten;
