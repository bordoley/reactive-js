/// <reference types="./Sequence.compute.d.ts" />

import Container_compute from "../../Container/__internal__/Container.compute.js";
import Optional_toSequence from "../../Optional/__internal__/Optional_toSequence.js";
import Sequence_map from "./Sequence.map.js";
const Sequence_compute = 
/*@__PURE__*/ Container_compute(Optional_toSequence, Sequence_map);
export default Sequence_compute;
