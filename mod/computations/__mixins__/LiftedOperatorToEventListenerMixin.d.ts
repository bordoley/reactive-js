import { Mixin2 } from "../../__internal__/mixins.js";
import { EventListenerLike, EventListenerLike_notify } from "../../utils.js";
import { LiftedOperatorLike } from "../__internal__/LiftedSource.js";
export declare const LiftedOperatorToEventListenerLike_operator: unique symbol;
export declare const LiftedOperatorToEventListenerLike_delegate: unique symbol;
export interface LiftedOperatorToEventListenerLike<T, TDelegate extends EventListenerLike> extends EventListenerLike<T> {
    readonly [LiftedOperatorToEventListenerLike_delegate]: TDelegate;
    readonly [LiftedOperatorToEventListenerLike_operator]: LiftedOperatorLike<T>;
}
type TReturn<T, TDelegate extends EventListenerLike> = LiftedOperatorToEventListenerLike<T, TDelegate>;
type TPrototype<T, TDelegate extends EventListenerLike> = Pick<LiftedOperatorToEventListenerLike<T, TDelegate>, typeof EventListenerLike_notify>;
declare const LiftedOperatorToEventListenerMixin: <T, TDelegate extends EventListenerLike>() => Mixin2<TReturn<T, TDelegate>, LiftedOperatorLike<T>, TDelegate, TPrototype<T, TDelegate>>;
export default LiftedOperatorToEventListenerMixin;
