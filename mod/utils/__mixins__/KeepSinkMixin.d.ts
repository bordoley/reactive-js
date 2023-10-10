import { Mixin2 } from "../../__internal__/mixins.js";
import { Predicate } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../utils.js";
declare const KeepSinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Predicate<T>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default KeepSinkMixin;
