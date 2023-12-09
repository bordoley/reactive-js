import { Mixin3 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { Factory, Reducer } from "../../functions.js";
declare const ScanSinkMixin: <T, TAcc>() => Mixin3<SinkLike<T>, SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default ScanSinkMixin;
