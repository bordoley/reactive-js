import { Mixin1 } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import { LiftedEventListenerLike, LiftedEventListenerLike_notify } from "../LiftedEventListenerMixin.js";
declare const MapMixin: <TA, TB>() => Mixin1<Pick<LiftedEventListenerLike<TA, TB>, typeof LiftedEventListenerLike_notify>, Function1<TA, TB>>;
export default MapMixin;
