import { Mixin1 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_complete, SinkLike_isCompleted } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike } from "./LiftedSinkToEventListenerMixin.js";
export interface LiftedSinkToSinkLike<TSubscription extends SinkLike, T> extends LiftedSinkToEventListenerLike<TSubscription, T>, SinkLike<T> {
}
type TReturn<TSubscription extends SinkLike, T> = LiftedSinkToSinkLike<TSubscription, T>;
type TPrototype<TSubscription extends SinkLike, T> = Pick<LiftedSinkToSinkLike<TSubscription, T>, typeof SinkLike_complete | typeof SinkLike_isCompleted>;
declare const LiftedSinkToSinkMixin: <TSubscription extends SinkLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>, TPrototype<TSubscription, T>>;
export default LiftedSinkToSinkMixin;
