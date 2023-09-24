import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import type * as Iterator from "../../Iterator.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

function* iterate<T>(values: readonly T[], startIndex: number, count: number) {
  for (
    ;
    count !== 0;
    count > 0 ? (startIndex++, count--) : (startIndex--, count++)
  ) {
    yield values[startIndex];
  }
}

const ReadonlyArray_values: ReadonlyArray.Signature["values"] =
  /*@__PURE__*/ IndexedCollection_toContainer<
    ReadonlyArray.Type,
    Iterator.Type
  >(iterate, v => v.length);

export default ReadonlyArray_values;
