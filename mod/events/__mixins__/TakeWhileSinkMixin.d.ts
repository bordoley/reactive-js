import { Mixin3 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { Optional, Predicate } from "../../functions.js";
declare const TakeWhileSinkMixin: <T>() => Mixin3<SinkLike<T>, SinkLike<T>, Predicate<T>, Optional<boolean>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default TakeWhileSinkMixin;
