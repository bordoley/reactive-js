import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import { toObservable as EnumerableLike__toObservable } from "../../../ix/EnumerableLike";
import { ToRunnableObservable } from "../../../rx";

import IterableLike__toEnumerable from "./IterableLike.toEnumerable";

const toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = options =>
  compose(
    IterableLike__toEnumerable(),
    // FIXME: any use
    EnumerableLike__toObservable(options as any),
  );

export default toRunnableObservable;
