/// <reference types="./Observable.debug.d.ts" />

import { debug } from "../../../functions.js";
import Observable_forEach from "./Observable.forEach.js";
const Observable_debug = () => Observable_forEach(debug);
export default Observable_debug;
