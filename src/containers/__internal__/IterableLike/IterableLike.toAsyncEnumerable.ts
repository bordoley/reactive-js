import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import { fromEnumerable as AsyncEnumerableLike__fromEnumerable } from "../../../ix/AsyncEnumerableLike";
import IterableLike__toEnumerable from "./IterableLike.toEnumerable";

const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"] =
  () =>
    compose(
      IterableLike__toEnumerable(),
      AsyncEnumerableLike__fromEnumerable(),
    );

export default toAsyncEnumerable;
