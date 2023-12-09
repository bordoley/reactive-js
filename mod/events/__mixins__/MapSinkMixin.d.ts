import { Mixin2 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { Function1 } from "../../functions.js";
declare const MapSinkMixin: <TA, TB>() => Mixin2<SinkLike<TA>, SinkLike<TB>, Function1<TA, TB>, unknown, Pick<SinkLike<TA>, typeof SinkLike_notify>>;
export default MapSinkMixin;
