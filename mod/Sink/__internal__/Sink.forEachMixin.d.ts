import { Mixin2 } from "../../__internal__/mixins.js";
import { SideEffect1 } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";
declare const Sink_forEachMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, SideEffect1<T>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_forEachMixin;
