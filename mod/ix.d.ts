import { DisposableLike } from "./utils.js";
export declare const EnumeratorLike_current: unique symbol;
export declare const EnumeratorLike_hasCurrent: unique symbol;
export declare const EnumeratorLike_isCompleted: unique symbol;
export declare const EnumeratorLike_move: unique symbol;
/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 *
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> extends DisposableLike {
    /**
     * Indicates if the `EnumeratorLike` is completed.
     */
    readonly [EnumeratorLike_isCompleted]: boolean;
    /**
     * Returns the element if present.
     */
    readonly [EnumeratorLike_current]: T;
    /**
     * Indicates if the `EnumeratorLike` has a current value.
     */
    readonly [EnumeratorLike_hasCurrent]: boolean;
    /**
     * Advances the enumerator to the next value, if present.
     *
     * @returns true if successful, otherwise false.
     */
    [EnumeratorLike_move](): boolean;
}
export declare const EnumerableLike_enumerate: unique symbol;
/**
 * @noInheritDoc
 */
export interface EnumerableLike<T = unknown> {
    [EnumerableLike_enumerate](): EnumeratorLike<T>;
}
