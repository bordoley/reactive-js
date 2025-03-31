import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
export declare const DelegatingLiftedSinkLike_delegate: unique symbol;
export declare const DelegatingLiftedSinkLike_onCompleted: unique symbol;
export interface DelegatingLiftedSinkLike<TSubscription extends DisposableLike, TA, TB = TA> extends LiftedSinkLike<TSubscription, TA> {
    readonly [DelegatingLiftedSinkLike_delegate]: LiftedSinkLike<TSubscription, TB>;
    [DelegatingLiftedSinkLike_onCompleted](): void;
}
type TPrototype<TSubscription extends DisposableLike, TA, TB = TA> = Pick<DelegatingLiftedSinkLike<TSubscription, TA, TB>, typeof EventListenerLike_notify | typeof SinkLike_isCompleted | typeof SinkLike_complete | typeof DelegatingLiftedSinkLike_onCompleted>;
interface DelegatingLiftedSinkMixin {
    <TSubscription extends DisposableLike, TA, TB>(): Mixin1<DelegatingLiftedSinkLike<TSubscription, TA, TB>, LiftedSinkLike<TSubscription, TB>, TPrototype<TSubscription, TA>>;
    <TSubscription extends DisposableLike, T>(): Mixin1<DelegatingLiftedSinkLike<TSubscription, T>, LiftedSinkLike<TSubscription, T>, TPrototype<TSubscription, T>>;
}
declare const DelegatingLiftedSinkMixin: DelegatingLiftedSinkMixin;
export default DelegatingLiftedSinkMixin;
