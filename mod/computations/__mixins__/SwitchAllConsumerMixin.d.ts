import { Mixin2 } from "../../__internal__/mixins.js";
import { SourceLike } from "../../computations.js";
import { Function1 } from "../../functions.js";
import { ConsumerLike } from "../../utils.js";
type TReturn<TInnerSource extends SourceLike<T, TConsumer>, TConsumer extends ConsumerLike<T>, T> = ConsumerLike<TInnerSource>;
declare const SwitchAllConsumerMixin: <TInnerSource extends SourceLike<T, TConsumer>, TConsumer extends ConsumerLike<T>, T>() => Mixin2<TReturn<TInnerSource, TConsumer, T>, ConsumerLike<T>, Function1<TConsumer, TConsumer>>;
export default SwitchAllConsumerMixin;
