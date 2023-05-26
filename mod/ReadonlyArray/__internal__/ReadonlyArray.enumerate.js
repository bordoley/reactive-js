/// <reference types="./ReadonlyArray.enumerate.d.ts" />

import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { compose } from "../../functions.js";
import ReadonlyArray_toIterable from "./ReadonlyArray.toIterable.js";
const ReadonlyArray_enumerate = options => compose(ReadonlyArray_toIterable(options), Iterable_enumerate());
export default ReadonlyArray_enumerate;
