import { Mixin3 } from "../../../__internal__/mixins.js";
import { Factory, Reducer } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
declare const Sink_scanMixin: <T, TAcc>() => Mixin3<SinkLike<T>, SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>, Pick<SinkLike<T>, typeof ObserverLike_notify>>;
export default Sink_scanMixin;
