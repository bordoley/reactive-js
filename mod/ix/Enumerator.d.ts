import { Function1, SideEffect1 } from "../functions.js";
import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move } from "../ix.js";
export declare const forEach: <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
export declare const getCurrent: <T>(enumerator: {
    [EnumeratorLike_current]: T;
}) => T;
export declare const hasCurrent: (enumerator: {
    [EnumeratorLike_hasCurrent]: boolean;
}) => boolean;
export declare const move: <T>(enumerator: {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [SourceLike_move]: () => void;
}) => boolean;
/** @ignore */
declare const Enumerator: {
    forEach: <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
    getCurrent: <T_1>(enumerator: {
        [EnumeratorLike_current]: T_1;
    }) => T_1;
    hasCurrent: (enumerator: {
        [EnumeratorLike_hasCurrent]: boolean;
    }) => boolean;
    move: <T_2>(enumerator: {
        [EnumeratorLike_current]: T_2;
        [EnumeratorLike_hasCurrent]: boolean;
        [SourceLike_move]: () => void;
    }) => boolean;
};
export default Enumerator;
