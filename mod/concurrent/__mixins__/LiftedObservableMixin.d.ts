import { Mixin3 } from "../../__internal__/mixins.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, ObserverLike } from "../../concurrent.js";
import { Function1 } from "../../functions.js";
export declare const LiftedObservableLike_source: unique symbol;
export declare const LiftedObservableLike_operators: unique symbol;
export interface LiftedObservableLike<TIn, TOut> extends ObservableLike<TOut> {
    [LiftedObservableLike_source]: ObservableLike<TIn>;
    [LiftedObservableLike_operators]: readonly Function1<ObserverLike<any>, ObserverLike<any>>[];
}
declare const LiftedObservableMixin: <TIn, TOut>() => Mixin3<LiftedObservableLike<TIn, TOut>, ObservableLike<TIn>, readonly Function1<ObserverLike<any>, ObserverLike<any>>[], {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}, unknown, Pick<ObservableLike<TOut>, typeof ObservableLike_observe>>;
export default LiftedObservableMixin;
