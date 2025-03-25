import { Mixin1 } from "../../__internal__/mixins.js";
import { LiftedOperatorLike, LiftedOperatorLike_complete, LiftedOperatorLike_isCompleted, LiftedOperatorLike_notify } from "../__internal__/LiftedSource.js";
export declare const DelegatingLiftedOperatorLike_delegate: unique symbol;
export interface DelegatingLiftedOperatorLike<TA, TB = TA> extends LiftedOperatorLike<TA> {
    readonly [DelegatingLiftedOperatorLike_delegate]: LiftedOperatorLike<TB>;
}
type TPrototype<TA> = Pick<LiftedOperatorLike<TA>, typeof LiftedOperatorLike_isCompleted | typeof LiftedOperatorLike_notify | typeof LiftedOperatorLike_complete>;
interface DelegatingLiftedOperatorMixin {
    <TA, TB>(): Mixin1<DelegatingLiftedOperatorLike<TA, TB>, LiftedOperatorLike<TB>, TPrototype<TA>>;
    <T>(): Mixin1<DelegatingLiftedOperatorLike<T>, LiftedOperatorLike<T>, TPrototype<T>>;
}
declare const DelegatingLiftedOperatorMixin: DelegatingLiftedOperatorMixin;
export default DelegatingLiftedOperatorMixin;
