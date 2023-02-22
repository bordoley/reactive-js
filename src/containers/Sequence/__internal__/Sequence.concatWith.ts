import { ConcatWith, SequenceLike } from "../../../containers.js";
import Container_concatWith from "../../Container/__internal__/Container.concatWith.js";
import Sequence_concat from "./Sequence.concat.js";

const Sequence_concatWith: ConcatWith<SequenceLike>["concatWith"] =
  /*@__PURE__*/ Container_concatWith(Sequence_concat);

export default Sequence_concatWith;
