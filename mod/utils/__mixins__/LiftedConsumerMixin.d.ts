import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike } from "../../utils.js";
import { LiftedSinkLike } from "./LiftedSinkMixin.js";
export declare const LiftedConsumerLike_isReady: unique symbol;
export declare const LiftedConsumerLike_consumer: unique symbol;
export interface LiftedConsumerLike<TA = unknown, TB = TA, TDelegateConsumer extends ConsumerLike<TB> = ConsumerLike<TB>, TConsumer extends ConsumerLike = ConsumerLike> extends LiftedSinkLike<TA, TB, TDelegateConsumer>, ConsumerLike<TA> {
    readonly [LiftedConsumerLike_isReady]: boolean;
    readonly [LiftedConsumerLike_consumer]: TConsumer;
}
interface LiftedConsumerMixinModule {
    <TA, TB = TA, TDelegateConsumer extends ConsumerLike<TB> = ConsumerLike<TB>, TConsumer extends ConsumerLike = ConsumerLike>(): Mixin1<LiftedConsumerLike<TA, TB, TDelegateConsumer, TConsumer>, TDelegateConsumer>;
    <T, TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>, TConsumer extends ConsumerLike = ConsumerLike>(): Mixin1<LiftedConsumerLike<T, T, TDelegateConsumer, TConsumer>, TDelegateConsumer>;
}
declare const LiftedConsumerMixin: LiftedConsumerMixinModule;
export default LiftedConsumerMixin;
