import { StartWith } from "../../../containers.js";
import Container_startWith from "../../../containers/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_concatWith from "./Enumerable.concatWith.js";

const Enumerable_startWith: StartWith<EnumerableLike>["startWith"] =
  /*@__PURE__*/ Container_startWith(
    Enumerable_concatWith,
    ReadonlyArray_toEnumerable,
  );

export default Enumerable_startWith;
