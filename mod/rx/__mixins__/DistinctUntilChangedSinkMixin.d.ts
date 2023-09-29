import { Mixin2 } from "../../__internal__/mixins.js";
import { Equality } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../rx.js";
declare const DistinctUntilChangedSinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Equality<T>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default DistinctUntilChangedSinkMixin;
