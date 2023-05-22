import { Mixin3 } from "../../__internal__/mixins.js";
import { LiftedLike } from "../../__internal__/types.js";
import { Function1 } from "../../functions.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isRunnable, ObserverLike } from "../../types.js";
declare const Observable_liftMixin: <TIn, TOut>() => Mixin3<LiftedLike<ObservableLike<TIn>, ObserverLike> & ObservableLike<TOut>, ObservableLike<TIn>, readonly Function1<ObserverLike<any>, ObserverLike<any>>[], {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}>;
export default Observable_liftMixin;
