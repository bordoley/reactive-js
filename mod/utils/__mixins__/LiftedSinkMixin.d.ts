import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, SinkLike, SinkLike_complete } from "../../utils.js";
import { LiftedEventListenerLike, LiftedEventListenerLike_notify } from "./LiftedEventListenerMixin.js";
export declare const LiftedSinkLike_complete: unique symbol;
export declare const LiftedSinkLike_completeDelegate: unique symbol;
export interface LiftedSinkLike<TA = unknown, TB = TA, TDelegateSink extends SinkLike<TB> = SinkLike<TB>> extends LiftedEventListenerLike<TA, TB, TDelegateSink>, SinkLike<TA> {
    [LiftedSinkLike_complete](): void;
    [LiftedSinkLike_completeDelegate](): void;
}
interface LiftedSinkMixinModule {
    <TA, TB = TA, TDelegateSink extends SinkLike<TB> = SinkLike<TB>>(): Mixin1<LiftedSinkLike<TA, TB, TDelegateSink>, TDelegateSink, Pick<LiftedSinkLike<TA, TB, TDelegateSink>, keyof DisposableLike>, Pick<LiftedSinkLike<TA, TB, TDelegateSink>, typeof SinkLike_complete>>;
    <T, TDelegateSink extends SinkLike<T> = SinkLike<T>>(): Mixin1<LiftedSinkLike<T, T, TDelegateSink>, TDelegateSink, Pick<LiftedSinkLike<T, T, TDelegateSink>, keyof DisposableLike | typeof LiftedEventListenerLike_notify>, Pick<LiftedSinkLike<T, T, TDelegateSink>, typeof SinkLike_complete>>;
}
declare const LiftedSinkMixin: LiftedSinkMixinModule;
export default LiftedSinkMixin;
