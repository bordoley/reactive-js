import { Mixin3 } from "../../__internal__/mixins.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, ObserverLike } from "../../concurrent.js";
import { Function1 } from "../../functions.js";
export declare const LiftedObservableLike_source: unique symbol;
export declare const LiftedObservableLike_operators: unique symbol;
export interface LiftedObservableLike<TIn, TOut, TSrc extends ObservableLike<TIn> = ObservableLike<TIn>> extends ObservableLike<TOut> {
    [LiftedObservableLike_source]: TSrc;
    [LiftedObservableLike_operators]: readonly Function1<ObserverLike<any>, ObserverLike<any>>[];
}
declare const LiftedObservableMixin: <TIn, TOut, TSrc extends ObservableLike<TIn> = ObservableLike<TIn>>() => Mixin3<LiftedObservableLike<TIn, TOut, TSrc>, ObservableLike<TIn>, readonly Function1<ObserverLike<any>, ObserverLike<any>>[], {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}, unknown, Pick<ObservableLike<TOut>, typeof ObservableLike_observe>>;
export default LiftedObservableMixin;
