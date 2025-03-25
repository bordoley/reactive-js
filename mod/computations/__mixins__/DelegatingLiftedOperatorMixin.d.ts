import { Mixin1 } from "../../__internal__/mixins.js";
import { LiftedOperatorLike, LiftedOperatorLike_complete, LiftedOperatorLike_notify } from "../__internal__/LiftedSource.js";
export declare const DelegatingLiftedOperatorLike_delegate: unique symbol;
export declare const DelegatingLiftedOperatorLike_onCompleted: unique symbol;
export interface DelegatingLiftedOperatorLike<TA, TB = TA> extends LiftedOperatorLike<TA> {
    readonly [DelegatingLiftedOperatorLike_delegate]: LiftedOperatorLike<TB>;
    [DelegatingLiftedOperatorLike_onCompleted](): void;
}
type TPrototype<TA, TB = TA> = Pick<DelegatingLiftedOperatorLike<TA, TB>, typeof LiftedOperatorLike_notify | typeof LiftedOperatorLike_complete | typeof DelegatingLiftedOperatorLike_onCompleted>;
interface DelegatingLiftedOperatorMixin {
    <TA, TB>(): Mixin1<DelegatingLiftedOperatorLike<TA, TB>, LiftedOperatorLike<TB>, TPrototype<TA>>;
    <T>(): Mixin1<DelegatingLiftedOperatorLike<T>, LiftedOperatorLike<T>, TPrototype<T>>;
}
declare const DelegatingLiftedOperatorMixin: DelegatingLiftedOperatorMixin;
export default DelegatingLiftedOperatorMixin;
