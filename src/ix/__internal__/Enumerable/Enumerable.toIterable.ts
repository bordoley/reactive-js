import { ToIterable } from "../../../containers";
import { newInstance, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerable$move from "../Source/Source.move";
import Enumerable$enumerate from "./Enumerable.enumerate";

const Enumerable$toIterable: ToIterable<EnumerableLike>["toIterable"] =
  /*@__PURE__*/ (() => {
    class EnumerableIterable<T = unknown> implements Iterable<T> {
      constructor(private readonly enumerable: EnumerableLike<T>) {}

      *[Symbol.iterator]() {
        const enumerator = pipe(this.enumerable, Enumerable$enumerate());
        while (Enumerable$move(enumerator)) {
          yield Enumerator$getCurrent(enumerator);
        }
      }
    }

    return () => enumerable => newInstance(EnumerableIterable, enumerable);
  })();

export default Enumerable$toIterable;
