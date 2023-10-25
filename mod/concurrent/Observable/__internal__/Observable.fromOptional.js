/// <reference types="./Observable.fromOptional.d.ts" />

import { compose, isSome, none } from "../../../functions.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
const Observable_fromOptional = (options) => compose(x => (isSome(x) ? [x] : []), Observable_fromReadonlyArray(isSome(options) ? { ...options, delayStart: true } : none));
export default Observable_fromOptional;
