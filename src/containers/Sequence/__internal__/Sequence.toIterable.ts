import { SequenceLike, ToIterable } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import Enumerable_toIterable from "../../../rx/Enumerable/__internal__/Enumerable.toIterable.js";
import Sequence_toObservable from "./Sequence.toObservable.js";

const Sequence_toIterable: ToIterable<SequenceLike>["toIterable"] = returns(
  compose(Sequence_toObservable(), Enumerable_toIterable()),
);

export default Sequence_toIterable;
