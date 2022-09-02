import { EnumeratorLike, EnumeratorLike_current, SourceLike_move } from "../../ix.mjs";
import { DisposableLike } from "../../util.mjs";
import { Mixin } from "../mixins.mjs";
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, keyof DisposableLike | typeof SourceLike_move>;
declare const mutableEnumeratorMixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export { MutableEnumeratorLike, mutableEnumeratorMixin };
