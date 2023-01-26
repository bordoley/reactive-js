import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import Enumerable$toAsyncEnumerable from "../../../ix/__internal__/Enumerable/Enumerable.toAsyncEnumerable";
import Iterable$toEnumerable from "./Iterable.toEnumerable";

const Iterable$toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  () => compose(Iterable$toEnumerable(), Enumerable$toAsyncEnumerable());

export default Iterable$toAsyncEnumerable;
