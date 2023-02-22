import { IgnoreElements } from "../../../containers.js";
import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_keep from "./Runnable.keep.js";

const Runnable_ignoreElements: IgnoreElements<RunnableLike>["ignoreElements"] =
  /*@__PURE__*/ Container_ignoreElements(Runnable_keep);

export default Runnable_ignoreElements;
