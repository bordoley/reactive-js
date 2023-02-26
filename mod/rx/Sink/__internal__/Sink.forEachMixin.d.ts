import { Mixin2 } from "../../../__internal__/mixins.js";
import { SideEffect1 } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
export declare const Sink_forEachMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, SideEffect1<T>, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_forEachMixin;
