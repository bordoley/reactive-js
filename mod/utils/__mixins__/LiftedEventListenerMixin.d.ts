import { Mixin1 } from "../../__internal__/mixins.js";
import { EventListenerLike } from "../../utils.js";
export declare const LiftedEventListenerLike_notify: unique symbol;
export declare const LiftedEventListenerLike_notifyDelegate: unique symbol;
export declare const LiftedEventListenerLike_delegate: unique symbol;
export interface LiftedEventListenerLike<TA = unknown, TB = TA, TDelegateEventListener extends EventListenerLike<TB> = EventListenerLike<TB>> extends EventListenerLike<TA> {
    readonly [LiftedEventListenerLike_delegate]: TDelegateEventListener;
    [LiftedEventListenerLike_notify](next: TA): void;
    [LiftedEventListenerLike_notifyDelegate](next: TB): void;
}
interface LiftedEventListenerMixinModule {
    <TA, TB = TA, TDelegateEventListener extends EventListenerLike<TB> = EventListenerLike<TB>>(): Mixin1<LiftedEventListenerLike<TA, TB, TDelegateEventListener>, TDelegateEventListener>;
    <T, TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>>(): Mixin1<LiftedEventListenerLike<T, T, TDelegateEventListener>, TDelegateEventListener>;
}
declare const LiftedEventListenerMixin: LiftedEventListenerMixinModule;
export default LiftedEventListenerMixin;
