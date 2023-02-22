import { SequenceLike, ToIterable } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import Enumerable_toIterable from "../../../ix/Enumerable/__internal__/Enumerable.toIterable.js";
import Sequence_toEnumerable from "./Sequence.toEnumerable.js";

const Sequence_toIterable: ToIterable<SequenceLike>["toIterable"] = returns(
  compose(Sequence_toEnumerable(), Enumerable_toIterable()),
);

export default Sequence_toIterable;
