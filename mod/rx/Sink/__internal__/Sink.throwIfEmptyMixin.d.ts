import { Mixin2 } from "../../../__internal__/mixins.js";
import { Factory } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_throwIfEmptyMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Factory<unknown>, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_throwIfEmptyMixin;
