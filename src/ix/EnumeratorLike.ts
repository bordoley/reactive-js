import { Function1, SideEffect1 } from "../util/functions";
import {
  InteractiveSourceLike,
  InteractiveSourceLike_move,
  move as ixMove,
} from "./InteractiveSourceLike";

export const EnumeratorLike_current = Symbol("EnumeratorLike_current");
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");

export interface EnumeratorLike<T = unknown> extends InteractiveSourceLike {
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;
}

export const getCurrent = <T>(enumerator: { [EnumeratorLike_current]: T }): T =>
  enumerator[EnumeratorLike_current];

export const hasCurrent = (enumerator: {
  [EnumeratorLike_hasCurrent]: boolean;
}): boolean => enumerator[EnumeratorLike_hasCurrent];

export const move = <T>(enumerator: {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_hasCurrent]: boolean;
  [InteractiveSourceLike_move]: () => void;
}): boolean => {
  ixMove(enumerator);
  return hasCurrent(enumerator);
};

export const forEach =
  <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(
    f: SideEffect1<T>,
  ): Function1<TEnumerator, TEnumerator> =>
  enumerator => {
    while (move(enumerator)) {
      f(getCurrent(enumerator));
    }
    return enumerator;
  };
