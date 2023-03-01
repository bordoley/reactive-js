import { Mixin2 } from "../../../__internal__/mixins.js";
import { SideEffect1 } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
export declare const Sink_forEachMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, SideEffect1<T>, Pick<SinkLike<T>, typeof ObserverLike_notify>>;
export default Sink_forEachMixin;
