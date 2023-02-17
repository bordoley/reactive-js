import { SequenceLike } from "../../../containers";
import { compose, returns } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable";
import Sequence_toEnumerable from "./Sequence.toEnumerable";

const Sequence_toAsyncEnumerable: ToAsyncEnumerable<SequenceLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ returns(
    compose(Sequence_toEnumerable(), Enumerable_toAsyncEnumerable()),
  );

export default Sequence_toAsyncEnumerable;
