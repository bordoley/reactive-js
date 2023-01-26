import { Mixin2 } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink_mapMixin: <TA, TB>() => Mixin2<SinkLike<TA>, SinkLike<TB>, Function1<TA, TB>>;
export { Sink_mapMixin, Sink_mapMixin as default };
