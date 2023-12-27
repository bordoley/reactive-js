import ReadonlyArray_toCollection from "../../ReadonlyArray/__private__/ReadonlyArray.toCollection.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_toReadonlyArray: ReadonlyArray.Signature["toReadonlyArray"] =
  /*@__PURE__*/ ReadonlyArray_toCollection<
    ReadonlyArray.ReadonlyArrayCollection
  >(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      startIndex === 0 && count === values.length
        ? values
        : count >= 0
        ? values.slice(startIndex, count + startIndex)
        : values.slice(startIndex + count + 1, startIndex + 1).reverse(),
  );

export default ReadonlyArray_toReadonlyArray;
