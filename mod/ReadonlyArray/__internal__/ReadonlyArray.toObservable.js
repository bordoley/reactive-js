/// <reference types="./ReadonlyArray.toObservable.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import { pipe } from "../../functions.js";
import ReadonlyArray_enumerate from "./ReadonlyArray.enumerate.js";
const ReadonlyArray_toObservable = (options) => (arr) => Enumerable_create(() => pipe(arr, ReadonlyArray_enumerate(options)));
export default ReadonlyArray_toObservable;
