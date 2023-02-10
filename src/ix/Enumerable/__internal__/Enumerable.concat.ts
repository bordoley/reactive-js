import { Concat } from "../../../containers";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable";
import { pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import Enumerable_concatAll from "./Enumerable.concatAll";

const Enumerable_concat: Concat<EnumerableLike>["concat"] = <T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<T> =>
  pipe(enumerables, ReadonlyArray_toEnumerable(), Enumerable_concatAll());

export default Enumerable_concat;
