import { Mixin } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, DeferredEventSourceLike } from "../../computations.js";
import { ConsumerLike } from "../../utils.js";
type TReturn<T, TConsumer extends ConsumerLike<T>> = Pick<DeferredEventSourceLike<T, TConsumer>, typeof Symbol.asyncIterator | typeof ComputationLike_isDeferred>;
declare const DeferredEventSourceBaseMixin: <T, TConsumer extends ConsumerLike<T>>() => Mixin<TReturn<T, TConsumer>>;
export default DeferredEventSourceBaseMixin;
