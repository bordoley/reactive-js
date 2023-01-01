import { Empty, ReadonlyArrayLike } from "../../../containers";

const ReadonlyArrayLike__empty: Empty<ReadonlyArrayLike>["empty"] =
  /*@__PURE__*/ (<T>() => {
    const _empty: readonly T[] = [];
    return (): ReadonlyArrayLike<T> => _empty;
  })();

export default ReadonlyArrayLike__empty;
