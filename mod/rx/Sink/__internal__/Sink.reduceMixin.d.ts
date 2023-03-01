import { Mixin3 } from "../../../__internal__/mixins.js";
import { Factory, Reducer } from "../../../functions.js";
import { ObservableLike, ObserverLike, ObserverLike_notify } from "../../../rx.js";
declare const Observer_reduceMixin: <C extends ObservableLike, T, TAcc>(fromReadonlyArray: (v: readonly TAcc[]) => C) => Mixin3<ObserverLike<T>, ObserverLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>, Pick<ObserverLike<T>, typeof ObserverLike_notify>>;
export default Observer_reduceMixin;
