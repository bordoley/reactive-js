import { Concat } from "../../../containers";
import ReadonlyArray$toEnumerable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toEnumerable";
import { pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import Enumerable$concatAll from "./Enumerable.concatAll";

const Enumerable$concat: Concat<EnumerableLike>["concat"] = <T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<T> =>
  pipe(enumerables, ReadonlyArray$toEnumerable(), Enumerable$concatAll());

export default Enumerable$concat;
