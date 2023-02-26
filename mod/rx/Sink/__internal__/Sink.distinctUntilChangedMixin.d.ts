import { Mixin2 } from "../../../__internal__/mixins.js";
import { Equality } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_distinctUntilChangedMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Equality<T>, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_distinctUntilChangedMixin;
