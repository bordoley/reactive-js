import { Keep, ReadonlyArrayLike } from "../../../containers";
import { Predicate } from "../../../functions";

const ReadonlyArrayLike__keep: Keep<ReadonlyArrayLike>["keep"] =
  <T>(predicate: Predicate<T>) =>
  (arr: readonly T[]): readonly T[] => {
    const result: ReadonlyArray<T> = arr.filter(
      predicate as (value: T) => value is T,
    );
    return result;
  };

export default ReadonlyArrayLike__keep;
