import { EnumeratorLike, EnumeratorLike_current } from '../../ix/EnumeratorLike.js';
import { InteractiveSourceLike_move } from '../../ix/InteractiveSourceLike.js';
import { Option } from '../../util/Option.js';
import { Mixin, Mixin1, Mixin2, Mixin3 } from '../util/mixins.js';
declare const EnumeratorMixin_current: unique symbol;
declare const EnumeratorMixin_hasCurrent: unique symbol;
interface EnumeratorMixin<T> {
    [EnumeratorMixin_current]: Option<T>;
    [EnumeratorMixin_hasCurrent]: boolean;
    [InteractiveSourceLike_move](): void;
}
interface MutableEnumeratorLike<T> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
interface MixinEnumerator {
    <TEnumerator extends EnumeratorMixin<T>, T = unknown>(): Mixin<TEnumerator, MutableEnumeratorLike<T>>;
    <TEnumerator extends EnumeratorMixin<T>, TA, T = unknown>(): Mixin1<TA, TEnumerator, MutableEnumeratorLike<T>>;
    <TEnumerator extends EnumeratorMixin<T>, TA, TB, T = unknown>(): Mixin2<TA, TB, TEnumerator, MutableEnumeratorLike<T>>;
    <TEnumerator extends EnumeratorMixin<T>, TA, TB, TC, T>(): Mixin3<TA, TB, TC, TEnumerator, MutableEnumeratorLike<T>>;
}
declare const mixinEnumerator: MixinEnumerator;
export { EnumeratorMixin, EnumeratorMixin_current, EnumeratorMixin_hasCurrent, MutableEnumeratorLike, mixinEnumerator };
