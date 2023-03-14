/// <reference types="./Sequence.fromFactory.d.ts" />

import Container_fromFactory from "../../Container/__internal__/Container.fromFactory.js";
import Optional_toSequence from "../../Optional/__internal__/Optional.toSequence.js";
import Sequence_map from "./Sequence.map.js";
const Sequence_fromFactory = 
/*@__PURE__*/ Container_fromFactory(Optional_toSequence, Sequence_map);
export default Sequence_fromFactory;
