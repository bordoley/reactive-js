import { IterableLike, ToReadonlyArray } from "../../../containers";
import { compose, returns } from "../../../functions";
import Enumerable_toReadonlyArray from "../../../ix/Enumerable/__internal__/Enumerable.toReadonlyArray";
import Iterable_toEnumerable from "./Iterable.toEnumerable";

const Iterable_toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"] =
  /*@__PURE__*/ returns(
    compose(Iterable_toEnumerable(), Enumerable_toReadonlyArray()),
  );

export default Iterable_toReadonlyArray;
