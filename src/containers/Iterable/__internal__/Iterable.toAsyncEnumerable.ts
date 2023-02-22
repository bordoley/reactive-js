import { IterableLike } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import { ToAsyncEnumerable } from "../../../ix.js";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";

const Iterable_toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ (() =>
    returns(
      compose(Iterable_toEnumerable(), Enumerable_toAsyncEnumerable()),
    ))();

export default Iterable_toAsyncEnumerable;
