import { Mixin3 } from "../../__internal__/mixins.js";
import { LiftedLike } from "../../__internal__/types.js";
import { Function1 } from "../../functions.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, ObserverLike } from "../../types.js";
declare const Observable_liftMixin: <TIn, TOut>() => Mixin3<LiftedLike<ObservableLike<TIn>, ObserverLike> & ObservableLike<TOut> & {
    [ObservableLike_isEnumerable]: false;
}, ObservableLike<TIn>, readonly Function1<ObserverLike<any>, ObserverLike<any>>[], {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}, unknown, Pick<ObservableLike<TOut>, typeof ObservableLike_observe> & {
    [ObservableLike_isEnumerable]: false;
}>;
export default Observable_liftMixin;
