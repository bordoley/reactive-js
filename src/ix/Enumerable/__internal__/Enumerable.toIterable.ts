import { ToIterable } from "../../../containers";
import { newInstance, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent";
import Enumerable_move from "../../Source/__internal__/Source.move";
import Enumerable_enumerate from "./Enumerable.enumerate";

const EnumerableIterable_enumerable = Symbol("EnumerableIterable_enumerable");
class EnumerableIterable<T = unknown> implements Iterable<T> {
  private readonly [EnumerableIterable_enumerable]: EnumerableLike<T>;
  constructor(enumerable: EnumerableLike<T>) {
    this[EnumerableIterable_enumerable] = enumerable;
  }

  *[Symbol.iterator]() {
    const enumerator = pipe(
      this[EnumerableIterable_enumerable],
      Enumerable_enumerate(),
    );
    while (Enumerable_move(enumerator)) {
      yield Enumerator_getCurrent(enumerator);
    }
  }
}

const Enumerable_toIterable: ToIterable<EnumerableLike>["toIterable"] =
  () => enumerable =>
    newInstance(EnumerableIterable, enumerable);

export default Enumerable_toIterable;
