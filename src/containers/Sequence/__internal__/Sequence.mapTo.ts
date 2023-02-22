import { MapTo, SequenceLike } from "../../../containers.js";

import Container_mapTo from "../../Container/__internal__/Container.mapTo.js";
import Sequence_map from "./Sequence.map.js";

const Sequence_mapTo: MapTo<SequenceLike>["mapTo"] =
  /*@__PURE__*/ Container_mapTo(Sequence_map);

export default Sequence_mapTo;
