import { Mixin2 } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike, ObserverLike, ObserverLike_notify } from "../../../rx.js";
declare const Sink_catchErrorMixin: <C extends ObservableLike, T>() => Mixin2<ObserverLike<T>, ObserverLike<T>, Function1<unknown, C | void>, Pick<ObserverLike<T>, typeof ObserverLike_notify>>;
export default Sink_catchErrorMixin;
