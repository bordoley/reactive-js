import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable";
import Iterable_toEnumerable from "./Iterable.toEnumerable";

const Iterable_toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  () => compose(Iterable_toEnumerable(), Enumerable_toAsyncEnumerable());

export default Iterable_toAsyncEnumerable;
