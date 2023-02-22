import { ConcatWith } from "../../../containers.js";

import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_concat from "./Enumerable.concat.js";

const Enumerable_concatWith: ConcatWith<EnumerableLike>["concatWith"] =
  /*@__PURE__*/ Container_concatWith(Enumerable_concat);

export default Enumerable_concatWith;
