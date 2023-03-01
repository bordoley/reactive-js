/// <reference types="./ReadonlyArray.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import ReadonlyArray_toRunnable from "./ReadonlyArray.toRunnable.js";
const ReadonlyArray_toFlowable = options => compose(ReadonlyArray_toRunnable(options), Runnable_toFlowable());
export default ReadonlyArray_toFlowable;
