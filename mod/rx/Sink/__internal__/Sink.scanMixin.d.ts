import { Mixin3 } from "../../../__internal__/mixins.js";
import { Factory, Reducer } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const ScanSinkMixin_acc: unique symbol;
declare const ScanSinkMixin_reducer: unique symbol;
export interface TProperties<T, TAcc> {
    [ScanSinkMixin_acc]: TAcc;
    [ScanSinkMixin_reducer]: Reducer<T, TAcc>;
}
declare const Sink_scanMixin: <T, TAcc>() => Mixin3<SinkLike<T>, SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_scanMixin;
