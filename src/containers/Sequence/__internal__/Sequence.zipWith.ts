import { SequenceLike, ZipWith } from "../../../containers.js";

import Container_zipWith from "../../Container/__internal__/Container.zipWith.js";
import Sequence_zip from "./Sequence.zip.js";

const Sequence_zipWith: ZipWith<SequenceLike>["zipWith"] =
  /*@__PURE__*/ Container_zipWith(Sequence_zip);

export default Sequence_zipWith;
