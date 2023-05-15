import type * as Enumerable from "../../Enumerable.js";
import Enumerator_toIterator from "../../Enumerator/__internal__/Enumerator.toIterator.js";
import { pipe } from "../../functions.js";
import { EnumerableLike } from "../../types.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

// FIXME: Not the most efficient implementation
const Enumerable_toIterable: Enumerable.Signature["toIterable"] =
  <T>() =>
  (enumerable: EnumerableLike<T>) => ({
    [Symbol.iterator]() {
      return pipe(enumerable, Enumerable_enumerate(), Enumerator_toIterator());
    },
  });

export default Enumerable_toIterable;
