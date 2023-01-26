import { ToIterable } from "../../../containers";
import { newInstance, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import Enumerator_getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerable_move from "../Source/Source.move";
import Enumerable_enumerate from "./Enumerable.enumerate";

const Enumerable_toIterable: ToIterable<EnumerableLike>["toIterable"] =
  /*@__PURE__*/ (() => {
    class EnumerableIterable<T = unknown> implements Iterable<T> {
      constructor(private readonly enumerable: EnumerableLike<T>) {}

      *[Symbol.iterator]() {
        const enumerator = pipe(this.enumerable, Enumerable_enumerate());
        while (Enumerable_move(enumerator)) {
          yield Enumerator_getCurrent(enumerator);
        }
      }
    }

    return () => enumerable => newInstance(EnumerableIterable, enumerable);
  })();

export default Enumerable_toIterable;
