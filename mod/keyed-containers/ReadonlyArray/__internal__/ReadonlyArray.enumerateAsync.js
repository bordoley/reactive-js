/// <reference types="./ReadonlyArray.enumerateAsync.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_enumerateAsync from "../../../rx/Enumerable/__internal__/Enumerable.enumerateAsync.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";
const ReadonlyArray_enumerateAsync = (scheduler, options) => (array) => pipe(array, ReadonlyArray_toObservable(options), Enumerable_enumerateAsync(scheduler, options));
export default ReadonlyArray_enumerateAsync;
