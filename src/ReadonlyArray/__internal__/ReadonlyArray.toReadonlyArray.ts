import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";

const ReadonlyArray_toReadonlyArray: ReadonlyArray.Signature["toReadonlyArray"] =
  /*@__PURE__*/ IndexedCollection_toContainer<
    ReadonlyArray.Type,
    ReadonlyArray.Type
  >(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      startIndex === 0 && count === values.length
        ? values
        : count >= 0
        ? values.slice(startIndex, count + startIndex)
        : values.slice(startIndex + count + 1, startIndex + 1).reverse(),
    ReadonlyArray_getLength,
  );

export default ReadonlyArray_toReadonlyArray;
