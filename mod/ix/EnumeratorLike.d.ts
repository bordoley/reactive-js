import { SideEffect1, Function1 } from "../functions.mjs";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move, EnumeratorLike } from "../ix.mjs";
declare const getCurrent: <T>(enumerator: {
    [EnumeratorLike_current]: T;
}) => T;
declare const hasCurrent: (enumerator: {
    [EnumeratorLike_hasCurrent]: boolean;
}) => boolean;
declare const move: <T>(enumerator: {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [SourceLike_move]: () => void;
}) => boolean;
declare const forEach: <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
export { forEach, getCurrent, hasCurrent, move };
