import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
declare const Observer_satisfyMixin: <T>(defaultResult: boolean) => Mixin2<ObserverLike<T>, ObserverLike<boolean>, Predicate<T>, Pick<ObserverLike<T>, typeof ObserverLike_notify>>;
export default Observer_satisfyMixin;
