import { IgnoreElements } from "../../../containers.js";
import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_keep from "./Enumerable.keep.js";

const Enumerable_ignoreElements: IgnoreElements<EnumerableLike>["ignoreElements"] =
  /*@__PURE__*/ Container_ignoreElements(Enumerable_keep);

export default Enumerable_ignoreElements;
