import { Concat } from "../../../containers";
import ReadonlyArrayLike__toEnumerable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable";
import { pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import EnumerableLike__concatAll from "./EnumerableLike.concatAll";

const EnumerableLike__concat: Concat<EnumerableLike>["concat"] = <T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<T> =>
  pipe(
    enumerables,
    ReadonlyArrayLike__toEnumerable(),
    EnumerableLike__concatAll(),
  );

export default EnumerableLike__concat;
