/// <reference types="./ReadonlyArray.toEnumeratorFactory.d.ts" />

import { composeLazy } from "../../functions.js";
import ReadonlyArray_enumerate from "./ReadonlyArray.enumerate.js";
const ReadonlyArray_toEnumeratorFactory = (options) => composeLazy(ReadonlyArray_enumerate(options));
export default ReadonlyArray_toEnumeratorFactory;
