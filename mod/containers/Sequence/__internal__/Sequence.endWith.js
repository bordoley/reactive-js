/// <reference types="./Sequence.endWith.d.ts" />

import Container_endWith from "../../Container/__internal__/Container.endWith.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Sequence_concatWith from "./Sequence.concatWith.js";
const Sequence_endWith = 
/*@__PURE__*/ Container_endWith(Sequence_concatWith, ReadonlyArray_toSequence);
export default Sequence_endWith;
