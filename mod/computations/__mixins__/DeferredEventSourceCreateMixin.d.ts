import { Mixin1 } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, DeferredEventSourceLike, EventSourceLike_subscribe } from "../../computations.js";
import { SideEffect1 } from "../../functions.js";
import { ConsumerLike } from "../../utils.js";
type TReturn<T, TConsumer extends ConsumerLike<T>> = Pick<DeferredEventSourceLike<T, TConsumer>, typeof EventSourceLike_subscribe | typeof ComputationLike_isDeferred>;
declare const DeferredEventSourceCreateMixin: <T, TConsumer extends ConsumerLike<T>>() => Mixin1<TReturn<T, TConsumer>, SideEffect1<TConsumer>>;
export default DeferredEventSourceCreateMixin;
