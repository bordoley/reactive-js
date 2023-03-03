import { Mixin } from "../../../__internal__/mixins.js";
import { DisposableLike, EnumeratorLike_move } from "../../../util.js";
import { MutableEnumeratorLike } from "../../__internal__/util.internal.js";
type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, keyof DisposableLike | typeof EnumeratorLike_move>;
declare const MutableEnumerator_mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export default MutableEnumerator_mixin;
