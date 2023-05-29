import Enumerable_concatAll from "./Enumerable/__internal__/Enumerable.concatAll.js";
import Enumerable_concatMap from "./Enumerable/__internal__/Enumerable.concatMap.js";
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
  concatAll<T>(): Function1<
    EnumerableLike<EnumerableLike<T>>,
    EnumerableLike<T>
  >;

  /**
   * @category Operator
   */
  concatMap<TA, TB>(
    selector: Function1<TA, EnumerableLike<TB>>,
  ): Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
}

export type Signature = EnumerableModule;

export const concatAll: Signature["concatAll"] = Enumerable_concatAll;
export const concatMap: Signature["concatMap"] = Enumerable_concatMap;
