import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import EnumerableLike__toAsyncEnumerable from "../../../ix/__internal__/EnumerableLike/EnumerableLike.toAsyncEnumerable";
import IterableLike__toEnumerable from "./IterableLike.toEnumerable";

const IterableLike__toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  () =>
    compose(IterableLike__toEnumerable(), EnumerableLike__toAsyncEnumerable());

export default IterableLike__toAsyncEnumerable;
