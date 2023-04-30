import {
  ReadonlyArrayContainerLike,
  ToReadonlyArray,
} from "../../../keyed-containers.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

const ReadonlyArray_toReadonlyArray: ToReadonlyArray<ReadonlyArrayContainerLike>["toReadonlyArray"] =
  /*@__PURE__*/ ReadonlyArray_toContainer<ReadonlyArrayContainerLike>(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      startIndex === 0 && count === values.length
        ? values
        : count >= 0
        ? values.slice(startIndex, count + startIndex)
        : values.slice(startIndex + count + 1, startIndex + 1).reverse(),
  );

export default ReadonlyArray_toReadonlyArray;
