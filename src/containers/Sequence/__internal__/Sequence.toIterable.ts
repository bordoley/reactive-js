import { SequenceLike, ToIterable } from "../../../containers.js";
import { newInstance, pipe } from "../../../functions.js";
import Enumerator_toIterator from "../../Enumerator/__internal__/Enumerator.toIterator.js";
import Sequence_enumerate from "./Sequence.enumerate.js";

const SequenceIterable_sequence = Symbol("SequenceIterable_sequence");

class SequenceIterable<T = unknown> implements Iterable<T> {
  private readonly [SequenceIterable_sequence]: SequenceLike<T>;
  constructor(enumerable: SequenceLike<T>) {
    this[SequenceIterable_sequence] = enumerable;
  }

  [Symbol.iterator]() {
    return pipe(
      this[SequenceIterable_sequence],
      Sequence_enumerate(),
      Enumerator_toIterator(),
    );
  }
}

const Sequence_toIterable: ToIterable<SequenceLike>["toIterable"] =
  () => enumerable =>
    newInstance(SequenceIterable, enumerable);

export default Sequence_toIterable;
