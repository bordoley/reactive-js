import { Empty, ReadonlyArrayLike } from "../../../containers";

const empty: Empty<ReadonlyArrayLike>["empty"] = /*@__PURE__*/ (<T>() => {
  const _empty: readonly T[] = [];
  return (): ReadonlyArrayLike<T> => _empty;
})();

export default empty;
