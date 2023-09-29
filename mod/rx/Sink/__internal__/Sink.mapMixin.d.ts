import { Mixin2 } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_mapMixin: <TA, TB>() => Mixin2<SinkLike<TA>, SinkLike<TB>, Function1<TA, TB>, unknown, Pick<SinkLike<TA>, typeof SinkLike_notify>>;
export default Sink_mapMixin;
