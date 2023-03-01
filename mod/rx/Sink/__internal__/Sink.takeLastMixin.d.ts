import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObservableLike, ObserverLike, ObserverLike_notify } from "../../../rx.js";
declare const Observer_takeLastMixin: <C extends ObservableLike, T>(fromReadonlyArray: (v: readonly T[]) => C) => Mixin2<ObserverLike<T>, ObserverLike<T>, number, Pick<ObserverLike<T>, typeof ObserverLike_notify>>;
export default Observer_takeLastMixin;
