/// <reference types="./Iterable.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import Iterable_toRunnableObservable from "./Iterable.toRunnableObservable.js";
const Iterable_toFlowable = options => compose(Iterable_toRunnableObservable(options), RunnableObservable_toFlowable());
export default Iterable_toFlowable;
