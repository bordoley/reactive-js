/// <reference types="./ReadonlyArray.toEventSource.d.ts" />

import Iterable_toEventSource from "../../Iterable/__internal__/Iterable.toEventSource.js";
import { compose } from "../../functions.js";
import ReadonlyArray_toIterable from "./ReadonlyArray.toIterable.js";
const ReadonlyArray_toEventSource = (options) => compose(ReadonlyArray_toIterable(options), Iterable_toEventSource());
export default ReadonlyArray_toEventSource;
