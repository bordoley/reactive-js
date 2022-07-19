import { SideEffect1, Function1 } from '../util/functions.js';
import { InteractiveSourceLike } from "./InteractiveSourceLike.mjs";
declare const EnumeratorLike_current: unique symbol;
declare const EnumeratorLike_hasCurrent: unique symbol;
interface EnumeratorLike<T = unknown> extends InteractiveSourceLike {
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
}
declare const getCurrent: <T>(enumerator: {
    [EnumeratorLike_current]: T;
}) => T;
declare const hasCurrent: (enumerator: {
    [EnumeratorLike_hasCurrent]: boolean;
}) => boolean;
declare const forEach: <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
export { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent, forEach, getCurrent, hasCurrent };
