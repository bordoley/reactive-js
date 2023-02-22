import { KeepType, SequenceLike } from "../../../containers.js";

import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import Sequence_keep from "./Sequence.keep.js";

const Sequence_keepType: KeepType<SequenceLike>["keepType"] =
  /*@__PURE__*/ Container_keepType(
    Sequence_keep,
  ) as KeepType<SequenceLike>["keepType"];

export default Sequence_keepType;
