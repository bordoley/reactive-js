/// <reference types="./Observable.fromValue.d.ts" />

import { compose, isSome, none, tuple } from "../../../functions.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
const Observable_fromValue = (options) => compose((tuple), Observable_fromReadonlyArray(isSome(options) ? { ...options, delayStart: true } : none));
export default Observable_fromValue;
