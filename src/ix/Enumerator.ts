import { Function1, SideEffect1 } from "../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../ix";

import Enumerator$forEach from "./__internal__/Enumerator/Enumerator.forEach";
import Enumerator$getCurrent from "./__internal__/Enumerator/Enumerator.getCurrent";
import Enumerator$hasCurrent from "./__internal__/Enumerator/Enumerator.hasCurrent";
import Enumerator$move from "./__internal__/Enumerator/Enumerator.move";

export const forEach: <
  T,
  TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>,
>(
  f: SideEffect1<T>,
) => Function1<TEnumerator, TEnumerator> = Enumerator$forEach;

export const getCurrent: <T>(enumerator: { [EnumeratorLike_current]: T }) => T =
  Enumerator$getCurrent;

export const hasCurrent: (enumerator: {
  [EnumeratorLike_hasCurrent]: boolean;
}) => boolean = Enumerator$hasCurrent;

export const move: <T>(enumerator: {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_hasCurrent]: boolean;
  [SourceLike_move]: () => void;
}) => boolean = Enumerator$move;
