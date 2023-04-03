/// <reference types="./ReadonlyArray.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";
const ReadonlyArray_toFlowable = options => compose(ReadonlyArray_toObservable(options), Runnable_toFlowable());
export default ReadonlyArray_toFlowable;
