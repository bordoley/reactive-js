import { ReadonlyArrayLike, ToReadonlyArray } from "../../../containers";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";

const ReadonlyArray_toReadonlyArray: ToReadonlyArray<
  ReadonlyArrayLike,
  {
    readonly start?: number;
    readonly count?: number;
  }
>["toReadonlyArray"] =
  /*@__PURE__*/ ReadonlyArray_toContainer<ReadonlyArrayLike>(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      count >= 0
        ? values.slice(startIndex, count + startIndex)
        : values.slice(startIndex + count + 1, startIndex + 1).reverse(),
  );

export default ReadonlyArray_toReadonlyArray;
