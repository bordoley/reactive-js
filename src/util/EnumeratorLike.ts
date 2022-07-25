import { Function1, SideEffect1 } from "../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../util";
import { move as ixMove } from "./SourceLike";

export const getCurrent = <T>(enumerator: { [EnumeratorLike_current]: T }): T =>
  enumerator[EnumeratorLike_current];

export const hasCurrent = (enumerator: {
  [EnumeratorLike_hasCurrent]: boolean;
}): boolean => enumerator[EnumeratorLike_hasCurrent];

export const move = <T>(enumerator: {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_hasCurrent]: boolean;
  [SourceLike_move]: () => void;
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
