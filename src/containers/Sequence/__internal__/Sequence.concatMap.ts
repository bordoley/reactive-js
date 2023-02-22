import { ConcatMap, SequenceLike } from "../../../containers.js";
import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Sequence_concatAll from "./Sequence.concatAll.js";
import Sequence_map from "./Sequence.map.js";

const Sequence_concatMap: ConcatMap<SequenceLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(Sequence_map, Sequence_concatAll);

export default Sequence_concatMap;
