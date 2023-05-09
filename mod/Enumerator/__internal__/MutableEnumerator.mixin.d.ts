import { Mixin } from "../../__internal__/mixins.js";
import { __MutableEnumeratorLike_reset as MutableEnumeratorLike_reset } from "../../__internal__/symbols.js";
import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_move } from "../../types.js";
export { MutableEnumeratorLike_reset };
export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
    [MutableEnumeratorLike_reset](): void;
}
type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, typeof EnumeratorLike_move>;
declare const MutableEnumerator_mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export default MutableEnumerator_mixin;
