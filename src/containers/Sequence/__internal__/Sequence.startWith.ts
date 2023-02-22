import { SequenceLike, StartWith } from "../../../containers.js";

import Container_startWith from "../../Container/__internal__/Container.startWith.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Sequence_concatWith from "./Sequence.concatWith.js";

const Sequence_startWith: StartWith<SequenceLike>["startWith"] =
  /*@__PURE__*/ Container_startWith(
    Sequence_concatWith,
    ReadonlyArray_toSequence,
  );

export default Sequence_startWith;
