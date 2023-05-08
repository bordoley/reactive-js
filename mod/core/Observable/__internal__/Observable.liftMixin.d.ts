import { LiftedLike } from "../../../__internal__/core.js";
import { Mixin3 } from "../../../__internal__/mixins.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Observable_liftMixin: <TIn, TOut>() => Mixin3<LiftedLike<ObservableLike<TIn>, ObserverLike> & ObservableLike<TOut>, ObservableLike<TIn>, readonly Function1<ObserverLike<any>, ObserverLike<any>>[], {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}>;
export default Observable_liftMixin;
