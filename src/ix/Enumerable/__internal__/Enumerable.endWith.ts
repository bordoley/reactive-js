import { EndWith } from "../../../containers.js";
import Container_endWith from "../../../containers/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_concatWith from "./Enumerable.concatWith.js";

const Enumerable_endWith: EndWith<EnumerableLike>["endWith"] =
  /*@__PURE__*/ Container_endWith(
    Enumerable_concatWith,
    ReadonlyArray_toEnumerable,
  );

export default Enumerable_endWith;
