import { SequenceLike } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import { ToAsyncEnumerable } from "../../../ix.js";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Sequence_toEnumerable from "./Sequence.toEnumerable.js";

const Sequence_toAsyncEnumerable: ToAsyncEnumerable<SequenceLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ returns(
    compose(Sequence_toEnumerable(), Enumerable_toAsyncEnumerable()),
  );

export default Sequence_toAsyncEnumerable;
