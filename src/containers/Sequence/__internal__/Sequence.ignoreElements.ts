import { IgnoreElements, SequenceLike } from "../../../containers.js";

import Container_ignoreElements from "../../Container/__internal__/Container.ignoreElements.js";
import Sequence_keep from "./Sequence.keep.js";

const Sequence_ignoreElements: IgnoreElements<SequenceLike>["ignoreElements"] =
  /*@__PURE__*/ Container_ignoreElements(Sequence_keep);

export default Sequence_ignoreElements;
