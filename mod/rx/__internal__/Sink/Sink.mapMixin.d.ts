import { Mixin2 } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink$mapMixin: <TA, TB>() => Mixin2<SinkLike<TA>, SinkLike<TB>, Function1<TA, TB>>;
export { Sink$mapMixin, Sink$mapMixin as default };
