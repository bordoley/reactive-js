import { Function1, SideEffect1 } from "../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../ix";

import EnumeratorLike__forEach from "./__internal__/EnumeratorLike/EnumeratorLike.forEach";
import EnumeratorLike__getCurrent from "./__internal__/EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__hasCurrent from "./__internal__/EnumeratorLike/EnumeratorLike.hasCurrent";
import EnumeratorLike__move from "./__internal__/EnumeratorLike/EnumeratorLike.move";

export const forEach: <
  T,
  TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>,
>(
  f: SideEffect1<T>,
) => Function1<TEnumerator, TEnumerator> = EnumeratorLike__forEach;

export const getCurrent: <T>(enumerator: { [EnumeratorLike_current]: T }) => T =
  EnumeratorLike__getCurrent;

export const hasCurrent: (enumerator: {
  [EnumeratorLike_hasCurrent]: boolean;
}) => boolean = EnumeratorLike__hasCurrent;

export const move: <T>(enumerator: {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_hasCurrent]: boolean;
  [SourceLike_move]: () => void;
}) => boolean = EnumeratorLike__move;
