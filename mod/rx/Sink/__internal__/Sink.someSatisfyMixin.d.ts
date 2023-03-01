import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { ObservableLike, ObserverLike, ObserverLike_notify } from "../../../rx.js";
declare const Observer_someSatisfyMixin: <C extends ObservableLike, T>(fromReadonlyArray: (v: readonly boolean[]) => C) => Mixin2<ObserverLike<T>, ObserverLike<boolean>, Predicate<T>, Pick<ObserverLike<T>, typeof ObserverLike_notify>>;
export default Observer_someSatisfyMixin;
