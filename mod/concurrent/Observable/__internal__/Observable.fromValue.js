/// <reference types="./Observable.fromValue.d.ts" />

import { compose, tuple } from "../../../functions.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
const Observable_fromValue = () => compose((tuple), Observable_fromReadonlyArray());
export default Observable_fromValue;
