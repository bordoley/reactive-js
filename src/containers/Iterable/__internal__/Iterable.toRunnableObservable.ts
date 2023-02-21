import { IterableLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import Enumerable_toRunnableObservable from "../../../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import { ToRunnableObservable } from "../../../rx.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";

const Iterable_toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnableObservable"] = options =>
  compose(Iterable_toEnumerable(), Enumerable_toRunnableObservable(options));

export default Iterable_toRunnableObservable;
