import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_takeLastMixin: <C extends ObservableLike, T>(fromReadonlyArray: (v: readonly T[]) => C) => Mixin2<ObserverLike<T>, ObserverLike<T>, number, Pick<ObserverLike<T>, typeof SinkLike_notify>>;
export default Sink_takeLastMixin;
