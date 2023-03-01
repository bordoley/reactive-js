/// <reference types="./Sequence.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import Sequence_toRunnable from "./Sequence.toRunnable.js";
const Sequence_toFlowable = options => compose(Sequence_toRunnable(options), Runnable_toFlowable());
export default Sequence_toFlowable;
