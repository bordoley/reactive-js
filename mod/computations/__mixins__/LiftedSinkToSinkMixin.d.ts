import { Mixin1 } from "../../__internal__/mixins.js";
import { SinkMixinLike, SinkMixinLike_doComplete, SinkMixinLike_doNotify } from "../../utils/__mixins__/SinkMixin.js";
import { SinkLike } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike } from "./LiftedSinkToEventListenerMixin.js";
type TReturn<TSubscription extends SinkLike, T> = Pick<SinkMixinLike<TSubscription, T>, typeof SinkMixinLike_doNotify | typeof SinkMixinLike_doComplete>;
declare const LiftedSinkToSinkMixin: <TSubscription extends SinkLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>, {}, LiftedSinkToEventListenerLike<TSubscription, T>>;
export default LiftedSinkToSinkMixin;
