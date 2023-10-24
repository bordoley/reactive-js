import Indexed_toCollection from "../../Indexed/__internal__/Indexed.toCollection.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_toReadonlyArray: ReadonlyArray.Signature["toReadonlyArray"] =
  /*@__PURE__*/ Indexed_toCollection<ReadonlyArray.Type, ReadonlyArray.Type>(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      startIndex === 0 && count === values.length
        ? values
        : count >= 0
        ? values.slice(startIndex, count + startIndex)
        : values.slice(startIndex + count + 1, startIndex + 1).reverse(),
    v => v.length,
  );

export default ReadonlyArray_toReadonlyArray;
