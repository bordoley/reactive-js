import type { EnumerableContainer } from "./Observable.js";
import { Function1 } from "./functions.js";
import { EnumerableLike } from "./types.js";
export type Type = EnumerableContainer;
/**
 * @noInheritDoc
 * @category Module
 */
export interface EnumerableModule {
    /**
     * Converts a higher-order Container into a first-order
     * Container by concatenating the inner sources in order.
     *
     * @category Operator
     */
    concatAll<T>(): Function1<EnumerableLike<EnumerableLike<T>>, EnumerableLike<T>>;
    /**
     * @category Operator
     */
    concatMap<TA, TB>(selector: Function1<TA, EnumerableLike<TB>>): Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
}
export type Signature = EnumerableModule;
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
