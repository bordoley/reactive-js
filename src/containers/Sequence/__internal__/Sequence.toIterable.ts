import { SequenceLike, ToIterable } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import { ToEnumerable } from "../../../ix.js";
import Enumerable_toIterable from "../../../ix/Enumerable/__internal__/Enumerable.toIterable.js";
import Sequence_toRunnable from "./Sequence.toRunnable.js";

const Sequence_toIterable: ToIterable<SequenceLike>["toIterable"] = returns(
  compose(
    (Sequence_toRunnable as ToEnumerable<SequenceLike>["toEnumerable"])(),
    Enumerable_toIterable(),
  ),
);

export default Sequence_toIterable;
