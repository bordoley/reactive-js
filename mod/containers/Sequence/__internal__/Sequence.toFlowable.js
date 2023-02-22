/// <reference types="./Sequence.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import Sequence_toRunnableObservable from "./Sequence.toRunnableObservable.js";
const Sequence_toFlowable = options => compose(Sequence_toRunnableObservable(options), RunnableObservable_toFlowable());
export default Sequence_toFlowable;
