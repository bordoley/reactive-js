import { Mixin3 } from "../../../__internal__/mixins.js";
import { Factory, Reducer } from "../../../functions.js";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_reduceMixin: <C extends ObservableLike, T, TAcc>(fromReadonlyArray: (v: readonly TAcc[]) => C) => Mixin3<ObserverLike<T>, ObserverLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>, Pick<ObserverLike<T>, typeof SinkLike_notify>>;
export default Sink_reduceMixin;
