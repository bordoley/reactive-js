/// <reference types="./ReadonlyArray.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import ReadonlyArray_toRunnableObservable from "./ReadonlyArray.toRunnableObservable.js";
const ReadonlyArray_toFlowable = options => compose(ReadonlyArray_toRunnableObservable(options), RunnableObservable_toFlowable());
export default ReadonlyArray_toFlowable;
