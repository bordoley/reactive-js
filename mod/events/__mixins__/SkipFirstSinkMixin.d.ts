import { Mixin2 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { Optional } from "../../functions.js";
declare const SkipFirstSinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Optional<number>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default SkipFirstSinkMixin;
