import { Concat } from "../../../containers.js";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import { pipe } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";

const Enumerable_concat: Concat<EnumerableLike>["concat"] = <T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<T> =>
  pipe(enumerables, ReadonlyArray_toEnumerable(), Enumerable_concatAll());

export default Enumerable_concat;
