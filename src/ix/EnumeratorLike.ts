import { Function1, SideEffect1 } from "../util/functions";
import { InteractiveSourceLike, move } from "./InteractiveSourceLike";

export const EnumeratorLike_current = Symbol("EnumeratorLike_current");
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");

export interface EnumeratorLike<T = unknown> extends InteractiveSourceLike {
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;
}

export const getCurrent = <T>(enumerator: EnumeratorLike<T>): T =>
  enumerator[EnumeratorLike_current];

export const hasCurrent = <T>(enumerator: EnumeratorLike<T>): boolean =>
  enumerator[EnumeratorLike_hasCurrent];

export const forEach =
  <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(
    f: SideEffect1<T>,
  ): Function1<TEnumerator, TEnumerator> =>
  enumerator => {
    while (move(enumerator) && hasCurrent(enumerator)) {
      f(getCurrent(enumerator));
    }
    return enumerator;
  };
