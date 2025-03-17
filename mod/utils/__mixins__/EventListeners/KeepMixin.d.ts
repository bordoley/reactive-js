import { Mixin1 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { LiftedEventListenerLike, LiftedEventListenerLike_notify } from "../LiftedEventListenerMixin.js";
declare const KeepMixin: <T>() => Mixin1<Pick<LiftedEventListenerLike<T>, typeof LiftedEventListenerLike_notify>, Predicate<T>>;
export default KeepMixin;
