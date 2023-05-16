import Enumerator_toIterator from "../../Enumerator/__internal__/Enumerator.toIterator.js";
import type * as Iterable from "../../Iterable.js";
import { Factory, pipe } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";

const Iterable_fromEnumeratorFactory: Iterable.Signature["fromEnumeratorFactory"] =

    <T>() =>
    (factory: Factory<EnumeratorLike<T>>) => ({
      [Symbol.iterator]() {
        return pipe(factory(), Enumerator_toIterator());
      },
    });

export default Iterable_fromEnumeratorFactory;
