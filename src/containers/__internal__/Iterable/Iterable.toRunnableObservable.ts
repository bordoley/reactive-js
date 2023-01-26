import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import Enumerable$toRunnableObservable from "../../../ix/__internal__/Enumerable/Enumerable.toRunnableObservable";
import { ToRunnableObservable } from "../../../rx";
import Iterable$toEnumerable from "./Iterable.toEnumerable";

const Iterable$toRunnableObservable: ToRunnableObservable<
  IterableLike,
  {
    delay: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = options =>
  compose(Iterable$toEnumerable(), Enumerable$toRunnableObservable(options));

export default Iterable$toRunnableObservable;
