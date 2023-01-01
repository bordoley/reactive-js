import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import { toEnumerableObservable as EnumerableLike__toEnumerableObservable } from "../../../ix/EnumerableLike";
import { ToEnumerableObservable } from "../../../rx";

import IterableLike__toEnumerable from "./IterableLike.toEnumerable";

const IterableLike__toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  _ =>
    compose(
      IterableLike__toEnumerable(),
      EnumerableLike__toEnumerableObservable(),
    );

export default IterableLike__toEnumerableObservable;
