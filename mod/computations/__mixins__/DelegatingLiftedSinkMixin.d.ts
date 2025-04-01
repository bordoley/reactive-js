import { Mixin1 } from "../../__internal__/mixins.js";
import { DelegatingSinkLike } from "../../utils/__mixins__/DelegatingSinkMixin.js";
import { SinkLike, SinkLike_complete, SinkLike_isCompleted } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
export declare const DelegatingLiftedSinkLike_onCompleted: unique symbol;
export interface DelegatingLiftedSinkLike<TSubscription extends SinkLike, TA, TB = TA> extends LiftedSinkLike<TSubscription, TA>, DelegatingSinkLike<TA, TB, LiftedSinkLike<TSubscription, TB>> {
    [DelegatingLiftedSinkLike_onCompleted](): void;
}
type TPrototype<TSubscription extends SinkLike, TA, TB = TA> = Pick<DelegatingLiftedSinkLike<TSubscription, TA, TB>, typeof SinkLike_isCompleted | typeof SinkLike_complete | typeof DelegatingLiftedSinkLike_onCompleted>;
interface DelegatingLiftedSinkMixin {
    <TSubscription extends SinkLike, TA, TB>(): Mixin1<DelegatingLiftedSinkLike<TSubscription, TA, TB>, LiftedSinkLike<TSubscription, TB>, TPrototype<TSubscription, TA>>;
    <TSubscription extends SinkLike, T>(): Mixin1<DelegatingLiftedSinkLike<TSubscription, T>, LiftedSinkLike<TSubscription, T>, TPrototype<TSubscription, T>>;
}
declare const DelegatingLiftedSinkMixin: DelegatingLiftedSinkMixin;
export default DelegatingLiftedSinkMixin;
