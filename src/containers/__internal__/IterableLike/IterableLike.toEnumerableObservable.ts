import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import { toObservable as EnumerableLike__toObservable } from "../../../ix/EnumerableLike";
import { ToEnumerableObservable } from "../../../rx";

import IterableLike__toEnumerable from "./IterableLike.toEnumerable";

const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  _ => compose(IterableLike__toEnumerable(), EnumerableLike__toObservable());

export default toEnumerableObservable;
