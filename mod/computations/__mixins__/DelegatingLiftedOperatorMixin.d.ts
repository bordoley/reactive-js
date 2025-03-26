import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike } from "../../utils.js";
import { LiftedOperatorLike, LiftedOperatorLike_complete, LiftedOperatorLike_notify } from "../__internal__/LiftedSource.js";
export declare const DelegatingLiftedOperatorLike_delegate: unique symbol;
export declare const DelegatingLiftedOperatorLike_onCompleted: unique symbol;
export interface DelegatingLiftedOperatorLike<TSubscription extends DisposableLike, TA, TB = TA> extends LiftedOperatorLike<TSubscription, TA> {
    readonly [DelegatingLiftedOperatorLike_delegate]: LiftedOperatorLike<TSubscription, TB>;
    [DelegatingLiftedOperatorLike_onCompleted](): void;
}
type TPrototype<TSubscription extends DisposableLike, TA, TB = TA> = Pick<DelegatingLiftedOperatorLike<TSubscription, TA, TB>, typeof LiftedOperatorLike_notify | typeof LiftedOperatorLike_complete | typeof DelegatingLiftedOperatorLike_onCompleted>;
interface DelegatingLiftedOperatorMixin {
    <TSubscription extends DisposableLike, TA, TB>(): Mixin1<DelegatingLiftedOperatorLike<TSubscription, TA, TB>, LiftedOperatorLike<TSubscription, TB>, TPrototype<TSubscription, TA>>;
    <TSubscription extends DisposableLike, T>(): Mixin1<DelegatingLiftedOperatorLike<TSubscription, T>, LiftedOperatorLike<TSubscription, T>, TPrototype<TSubscription, T>>;
}
declare const DelegatingLiftedOperatorMixin: DelegatingLiftedOperatorMixin;
export default DelegatingLiftedOperatorMixin;
