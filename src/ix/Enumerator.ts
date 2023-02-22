import { Function1, SideEffect1 } from "../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../ix.js";

import Enumerator_forEach from "./Enumerator/__internal__/Enumerator.forEach.js";
import Enumerator_getCurrent from "./Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "./Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "./Enumerator/__internal__/Enumerator.move.js";

export const forEach: <
  T,
  TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>,
>(
  f: SideEffect1<T>,
) => Function1<TEnumerator, TEnumerator> = Enumerator_forEach;

export const getCurrent: <T>(enumerator: { [EnumeratorLike_current]: T }) => T =
  Enumerator_getCurrent;

export const hasCurrent: (enumerator: {
  [EnumeratorLike_hasCurrent]: boolean;
}) => boolean = Enumerator_hasCurrent;

export const move: <T>(enumerator: {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_hasCurrent]: boolean;
  [SourceLike_move]: () => void;
}) => boolean = Enumerator_move;
