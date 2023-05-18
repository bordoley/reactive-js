import Enumerator_toIterator from "../../Enumerator/__internal__/Enumerator.toIterator.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { pipe } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

// FIXME: Not the most efficient implementation
const EnumeratorFactory_toIterable: EnumeratorFactory.Signature["toIterable"] =
  <T>() =>
  (enumerable: EnumeratorFactoryLike<T>) => ({
    [Symbol.iterator]() {
      return pipe(
        enumerable,
        EnumeratorFactory_enumerate(),
        Enumerator_toIterator(),
      );
    },
  });

export default EnumeratorFactory_toIterable;
