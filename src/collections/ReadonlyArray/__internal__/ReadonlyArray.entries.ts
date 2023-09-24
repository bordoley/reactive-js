import {
  Container,
  Container_T,
  Container_type,
} from "../../../collections.js";
import { Tuple2 } from "../../../functions.js";
import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

interface EntriesContainer extends Container<number> {
  readonly [Container_type]?: Iterator<
    Tuple2<number, this[typeof Container_T]>
  >;
}

function* iterate<TKey extends number, T>(
  arr: readonly T[],
  startIndex: number,
  count: number,
): Iterator<Tuple2<TKey, T>> {
  for (
    ;
    count !== 0;
    count > 0 ? (startIndex++, count--) : (startIndex--, count++)
  ) {
    yield [startIndex as TKey, arr[startIndex]];
  }
}

const ReadonlyArray_entries: ReadonlyArray.Signature["entries"] =
  /*@__PURE__*/ IndexedCollection_toContainer<
    ReadonlyArray.Type,
    EntriesContainer
  >(iterate, v => v.length) as ReadonlyArray.Signature["entries"];

export default ReadonlyArray_entries;
