/// <reference types="./ReadonlyArray.toInteractiveObservable.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_toInteractiveObservable from "../../../rx/Enumerable/__internal__/Enumerable.toInteractiveObservable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";
const ReadonlyArray_toInteractiveObservable = (scheduler, options) => (array) => pipe(array, ReadonlyArray_toObservable(options), Enumerable_toInteractiveObservable(scheduler, options));
export default ReadonlyArray_toInteractiveObservable;
