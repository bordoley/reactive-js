import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import { toRunnableObservable as EnumerableLike__toRunnableObservable } from "../../../ix/EnumerableLike";
import { ToRunnableObservable } from "../../../rx";

import IterableLike__toEnumerable from "./IterableLike.toEnumerable";

const IterableLike__toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = options =>
  compose(
    IterableLike__toEnumerable(),
    EnumerableLike__toRunnableObservable(options),
  );

export default IterableLike__toRunnableObservable;
