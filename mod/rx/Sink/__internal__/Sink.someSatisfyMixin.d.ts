import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_someSatisfyMixin: <C extends ObservableLike, T>(fromReadonlyArray: (v: readonly boolean[]) => C) => Mixin2<ObserverLike<T>, ObserverLike<boolean>, Predicate<T>, Pick<ObserverLike<T>, typeof SinkLike_notify>>;
export default Sink_someSatisfyMixin;
