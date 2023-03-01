import { Mixin2 } from "../../../__internal__/mixins.js";
import { Factory } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
declare const Sink_throwIfEmptyMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Factory<unknown>, Pick<SinkLike<T>, typeof ObserverLike_notify>>;
export default Sink_throwIfEmptyMixin;
