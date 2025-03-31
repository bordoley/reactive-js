import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, SinkLike } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike } from "./LiftedSinkToEventListenerMixin.js";
export interface LiftedSinkToSinkLike<TSubscription extends SinkLike, T> extends LiftedSinkToEventListenerLike<TSubscription, T>, SinkLike<T> {
}
type TReturn<TSubscription extends SinkLike, T> = Omit<LiftedSinkToSinkLike<TSubscription, T>, keyof DisposableLike>;
declare const LiftedSinkToSinkMixin: <TSubscription extends SinkLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>>;
export default LiftedSinkToSinkMixin;
