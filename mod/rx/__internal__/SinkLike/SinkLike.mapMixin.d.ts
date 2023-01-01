import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { Function1 } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const SinkLike__mapMixin: <TA, TB>() => Mixin2<SinkLike<TA>, SinkLike<TB>, Function1<TA, TB>>;
export { SinkLike__mapMixin, SinkLike__mapMixin as default };
