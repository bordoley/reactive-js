import { EndWith } from "../../../containers.js";
import Container_endWith from "../../../containers/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_concatWith from "./Runnable.concatWith.js";

const Runnable_endWith: EndWith<RunnableLike>["endWith"] =
  /*@__PURE__*/ Container_endWith(
    Runnable_concatWith,
    ReadonlyArray_toRunnable,
  );

export default Runnable_endWith;
