import { SequenceLike, ToIterable } from "../../../containers";
import { compose, returns } from "../../../functions";
import Enumerable_toIterable from "../../../ix/Enumerable/__internal__/Enumerable.toIterable";
import Sequence_toEnumerable from "./Sequence.toEnumerable";

const Sequence_toIterable: ToIterable<SequenceLike>["toIterable"] = returns(
  compose(Sequence_toEnumerable(), Enumerable_toIterable()),
);

export default Sequence_toIterable;
