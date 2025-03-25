import { Mixin2 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_complete, SinkLike_isCompleted } from "../../utils.js";
import { LiftedOperatorLike } from "../__internal__/LiftedSource.js";
import { LiftedOperatorToEventListenerLike } from "./LiftedOperatorToEventListenerMixin.js";
export interface LiftedOperatorToSinkLike<T, TDelegate extends SinkLike> extends LiftedOperatorToEventListenerLike<T, TDelegate>, SinkLike<T> {
}
type TReturn<T, TDelegate extends SinkLike> = LiftedOperatorToSinkLike<T, TDelegate>;
type TPrototype<T, TDelegate extends SinkLike> = Pick<LiftedOperatorToSinkLike<T, TDelegate>, typeof SinkLike_complete | typeof SinkLike_isCompleted>;
declare const LiftedOperatorToSinkMixin: <T, TDelegate extends SinkLike>() => Mixin2<TReturn<T, TDelegate>, LiftedOperatorLike<T>, TDelegate, TPrototype<T, TDelegate>>;
export default LiftedOperatorToSinkMixin;
