import { ConcatWith } from "../../../containers.js";

import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_concat from "./Runnable.concat.js";

const Runnable_concatWith: ConcatWith<RunnableLike>["concatWith"] =
  /*@__PURE__*/ Container_concatWith(Runnable_concat);

export default Runnable_concatWith;
