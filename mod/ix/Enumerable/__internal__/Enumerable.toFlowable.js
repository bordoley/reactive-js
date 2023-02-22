/// <reference types="./Enumerable.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import Enumerable_toRunnableObservable from "./Enumerable.toRunnableObservable.js";
const Enumerable_toFlowable = options => compose(Enumerable_toRunnableObservable(options), RunnableObservable_toFlowable());
export default Enumerable_toFlowable;
