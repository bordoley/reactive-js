import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import EnumerableLike__toRunnableObservable from "../../../ix/__internal__/EnumerableLike/EnumerableLike.toRunnableObservable";
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
