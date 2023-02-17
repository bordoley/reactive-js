import { IterableLike } from "../../../containers";
import { compose, returns } from "../../../functions";
import Enumerable_toRunnable from "../../../ix/Enumerable/__internal__/Enumerable.toRunnable";
import { ToRunnable } from "../../../rx";
import Iterable_toEnumerable from "./Iterable.toEnumerable";

const Iterable_toRunnable: ToRunnable<IterableLike>["toRunnable"] =
  /*@__PURE__*/ returns(
    compose(Iterable_toEnumerable(), Enumerable_toRunnable()),
  );

export default Iterable_toRunnable;
