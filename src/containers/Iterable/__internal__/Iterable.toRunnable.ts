import { IterableLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import Enumerable_toRunnable from "../../../ix/Enumerable/__internal__/Enumerable.toRunnable.js";
import { ToRunnable } from "../../../rx.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";

const Iterable_toRunnable: ToRunnable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnable"] = options =>
  compose(Iterable_toEnumerable(), Enumerable_toRunnable(options));

export default Iterable_toRunnable;
