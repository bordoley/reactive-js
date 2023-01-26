import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import Enumerable_toRunnableObservable from "../../../ix/__internal__/Enumerable/Enumerable.toRunnableObservable";
import { ToRunnableObservable } from "../../../rx";
import Iterable_toEnumerable from "./Iterable.toEnumerable";

const Iterable_toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = options =>
  compose(Iterable_toEnumerable(), Enumerable_toRunnableObservable(options));

export default Iterable_toRunnableObservable;
