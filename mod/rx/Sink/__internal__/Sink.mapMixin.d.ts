import { Mixin2 } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
export declare const Sink_mapMixin: <TA, TB>() => Mixin2<SinkLike<TA>, SinkLike<TB>, Function1<TA, TB>, Pick<SinkLike<TA>, typeof ObserverLike_notify>>;
export default Sink_mapMixin;
