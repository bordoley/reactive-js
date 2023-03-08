import { Mixin } from "../../../__internal__/mixins.js";
import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_move } from "../../../containers.js";
export declare const MutableEnumeratorLike_reset: unique symbol;
export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
    [MutableEnumeratorLike_reset](): void;
}
type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, typeof EnumeratorLike_move>;
declare const MutableEnumerator_mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export default MutableEnumerator_mixin;
