import { ToIterable } from "../../../containers";
import { newInstance, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumerableLike__move from "../SourceLike/SourceLike.move";
import EnumerableLike__enumerate from "./EnumerableLike.enumerate";

const EnumerableLike__toIterable: ToIterable<EnumerableLike>["toIterable"] =
  /*@__PURE__*/ (() => {
    class EnumerableIterable<T = unknown> implements Iterable<T> {
      constructor(private readonly enumerable: EnumerableLike<T>) {}

      *[Symbol.iterator]() {
        const enumerator = pipe(this.enumerable, EnumerableLike__enumerate());
        while (EnumerableLike__move(enumerator)) {
          yield EnumeratorLike__getCurrent(enumerator);
        }
      }
    }

    return () => enumerable => newInstance(EnumerableIterable, enumerable);
  })();

export default EnumerableLike__toIterable;
