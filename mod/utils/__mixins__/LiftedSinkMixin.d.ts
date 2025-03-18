import { Mixin1 } from "../../__internal__/mixins.js";
import { SinkLike } from "../../utils.js";
import { LiftedEventListenerLike } from "./LiftedEventListenerMixin.js";
export declare const LiftedSinkLike_complete: unique symbol;
export declare const LiftedSinkLike_completeDelegate: unique symbol;
export interface LiftedSinkLike<TA = unknown, TB = TA, TDelegateSink extends SinkLike<TB> = SinkLike<TB>> extends LiftedEventListenerLike<TA, TB, TDelegateSink>, SinkLike<TA> {
    [LiftedSinkLike_complete](): void;
    [LiftedSinkLike_completeDelegate](): void;
}
interface LiftedSinkMixinModule {
    <TA, TB = TA, TDelegateSink extends SinkLike<TB> = SinkLike<TB>>(): Mixin1<LiftedSinkLike<TA, TB, TDelegateSink>, TDelegateSink>;
    <T, TDelegateSink extends SinkLike<T> = SinkLike<T>>(): Mixin1<LiftedSinkLike<T, T, TDelegateSink>, TDelegateSink>;
}
declare const LiftedSinkMixin: LiftedSinkMixinModule;
export default LiftedSinkMixin;
