import { LiftedLike } from "../../../__internal__/core.js";
import { Mixin4 } from "../../../__internal__/mixins.js";
import { ObservableLike, ObserverLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Observable_liftMixin: <TIn, TOut>() => Mixin4<LiftedLike<ObservableLike<TIn>, ObserverLike> & ObservableLike<TOut>, ObservableLike<TIn>, readonly Function1<ObserverLike<any>, ObserverLike<any>>[], boolean, boolean>;
export default Observable_liftMixin;
